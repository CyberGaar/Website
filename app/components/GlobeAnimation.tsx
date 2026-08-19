"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const frameCount = 60;
const frameDuration = 520;

function framePath(index: number) {
  return `/globe-frames/frame-${String(index).padStart(3, "0")}.png`;
}

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

export default function GlobeAnimation() {
  const frames = useMemo(
    () => Array.from({ length: frameCount }, (_, index) => framePath(index)),
    [],
  );
  const [activeFrame, setActiveFrame] = useState(0);
  const [canAnimate, setCanAnimate] = useState(false);
  const loadedFrames = useRef(new Set([frames[0]]));
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const slowConnection = connection?.saveData || connection?.effectiveType === "2g";

    if (motionQuery.matches || slowConnection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setCanAnimate(entry.isIntersecting),
      { threshold: 0.25 },
    );

    if (stageRef.current) {
      observer.observe(stageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const idleWindow = window as IdleWindow;
    let cancelled = false;
    let idleId: number | undefined;
    let nextFrame = 1;

    const preloadNext = () => {
      if (cancelled || nextFrame >= frames.length) {
        return;
      }

      const src = frames[nextFrame];
      const image = new Image();
      image.decoding = "async";
      image.onload = () => loadedFrames.current.add(src);
      image.src = src;
      nextFrame += 1;

      if (idleWindow.requestIdleCallback) {
        idleId = idleWindow.requestIdleCallback(preloadNext, { timeout: 1200 });
      } else {
        window.setTimeout(preloadNext, 180);
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
    if (!canAnimate) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      setActiveFrame((current) => {
        const next = (current + 1) % frames.length;
        return loadedFrames.current.has(frames[next]) ? next : current;
      });
    }, frameDuration);

    return () => window.clearInterval(interval);
  }, [canAnimate, frames]);

  return (
    <div className="globe-sequence" ref={stageRef}>
      <img
        alt="Rotating globe showing cyber compliance standards across regions"
        draggable="false"
        height="640"
        src={frames[activeFrame]}
        width="640"
      />
      <div className="globe-readable-label globe-readable-us" aria-hidden="true">
        <strong>UNITED STATES</strong>
        <span>NIST</span>
        <span>SOC 2</span>
        <span>HIPAA</span>
        <span>PCI DSS</span>
      </div>
      <div className="globe-readable-label globe-readable-uk" aria-hidden="true">
        <strong>UNITED KINGDOM</strong>
        <span>Cyber Essentials</span>
        <span>ISO 27001</span>
      </div>
      <div className="globe-readable-label globe-readable-eu" aria-hidden="true">
        <strong>EUROPE</strong>
        <span>GDPR</span>
        <span>DORA</span>
      </div>
    </div>
  );
}
