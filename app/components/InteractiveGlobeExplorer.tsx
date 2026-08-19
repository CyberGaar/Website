"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { globeCountries, globeRegions } from "../data/globeStandards";

const frameCount = 60;
const frameDuration = 650;

function framePath(index: number) {
  return `/globe-frames/frame-${String(index).padStart(3, "0")}.png`;
}

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

export default function InteractiveGlobeExplorer() {
  const frames = useMemo(() => Array.from({ length: frameCount }, (_, index) => framePath(index)), []);
  const [activeFrame, setActiveFrame] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState(globeCountries[0]);
  const [playing, setPlaying] = useState(true);
  const loadedFrames = useRef(new Set([frames[0]]));
  const dragging = useRef(false);

  const visibleCountries = selectedRegion === "All"
    ? globeCountries
    : globeCountries.filter((country) => country.region === selectedRegion);

  useEffect(() => {
    const idleWindow = window as IdleWindow;
    let cancelled = false;
    let idleId: number | undefined;
    let nextFrame = 1;

    const preloadNext = () => {
      if (cancelled || nextFrame >= frames.length) {
        return;
      }

      const image = new Image();
      const src = frames[nextFrame];
      image.decoding = "async";
      image.onload = () => loadedFrames.current.add(src);
      image.src = src;
      nextFrame += 1;

      if (idleWindow.requestIdleCallback) {
        idleId = idleWindow.requestIdleCallback(preloadNext, { timeout: 1200 });
      } else {
        window.setTimeout(preloadNext, 220);
      }
    };

    preloadNext();

    return () => {
      cancelled = true;
      if (idleId && idleWindow.cancelIdleCallback) {
        idleWindow.cancelIdleCallback(idleId);
      }
    };
  }, [frames]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!playing || motionQuery.matches) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (document.hidden || dragging.current) {
        return;
      }

      setActiveFrame((current) => {
        const next = (current + 1) % frames.length;
        return loadedFrames.current.has(frames[next]) ? next : current;
      });
    }, frameDuration);

    return () => window.clearInterval(interval);
  }, [frames, playing]);

  const scrubToPointer = (clientX: number, currentTarget: HTMLDivElement) => {
    const rect = currentTarget.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const nextFrame = Math.round(progress * (frames.length - 1));
    setActiveFrame(nextFrame);
  };

  return (
    <section className="globe-explorer" aria-label="Interactive global cyber standards explorer">
      <div
        className="globe-explorer-stage"
        onPointerDown={(event) => {
          dragging.current = true;
          setPlaying(false);
          scrubToPointer(event.clientX, event.currentTarget);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (dragging.current) {
            scrubToPointer(event.clientX, event.currentTarget);
          }
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
      >
        <img
          alt="Interactive globe for cyber security standards by country"
          draggable="false"
          height="640"
          src={frames[activeFrame]}
          width="640"
        />
        <div className="globe-hint">Drag the globe area to rotate frames</div>
      </div>

      <aside className="globe-control-panel">
        <div>
          <p>GLOBAL STANDARDS EXPLORER</p>
          <h2>{selectedCountry.name}</h2>
          <span>{selectedCountry.region}</span>
        </div>

        <div className="globe-standard-tags">
          {selectedCountry.standards.map((standard) => <span key={standard}>{standard}</span>)}
        </div>

        <div className="globe-related">
          <p>Related Cybergaar work</p>
          {selectedCountry.relatedServices.map((service) => <span key={service}>{service}</span>)}
        </div>

        <div className="globe-controls">
          <button type="button" onClick={() => setPlaying(!playing)}>{playing ? "Pause rotation" : "Play rotation"}</button>
          <button type="button" onClick={() => setActiveFrame(0)}>Reset view</button>
        </div>

        <div className="globe-region-filter" aria-label="Filter countries by region">
          {["All", ...globeRegions].map((region) => (
            <button
              className={selectedRegion === region ? "active-filter" : ""}
              key={region}
              type="button"
              onClick={() => {
                setSelectedRegion(region);
                const nextCountry = region === "All" ? globeCountries[0] : globeCountries.find((country) => country.region === region);
                if (nextCountry) setSelectedCountry(nextCountry);
              }}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="globe-country-list">
          {visibleCountries.map((country) => (
            <button
              className={selectedCountry.name === country.name ? "active-country" : ""}
              key={country.name}
              type="button"
              onClick={() => setSelectedCountry(country)}
            >
              <span>{country.name}</span>
              <small>{country.standards.slice(0, 3).join(" / ")}</small>
            </button>
          ))}
        </div>
      </aside>
    </section>
  );
}
