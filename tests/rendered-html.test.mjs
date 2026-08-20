import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Cybergaar homepage and primary navigation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Cybergaar \| Security Audits, ISO 27001, Pentesting and Vulnerability Scanning<\/title>/i);
  assert.match(html, /See every gap/);
  assert.match(html, /href="\/msp"/);
  assert.match(html, /href="\/industries"/);
  assert.match(html, /href="\/solutions"/);
  assert.match(html, /href="\/product-studio"/);
  assert.match(html, /href="\/global-standards"/);
  assert.match(html, /href="\/services\/cyber-essentials"/);
  assert.match(html, /href="\/case-studies"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, /href="https:\/\/demo\.cybergaar\.com"/);
});

test("renders a complete service detail route", async () => {
  const response = await render("/services/cyber-essentials");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Cyber Essentials/);
  assert.match(html, /WHY IT MATTERS/);
  assert.match(html, /FORMAL AUDIT OR CERTIFICATION/);
  assert.match(html, /Discuss|Talk to Cybergaar/);
});

test("keeps the complete 30-service catalogue in one data source", async () => {
  const source = await readFile(new URL("../app/data/services.ts", import.meta.url), "utf8");
  assert.equal((source.match(/^    slug:/gm) ?? []).length, 30);
  assert.match(source, /category: "audits"/);
  assert.match(source, /category: "vulnerability-scanning"/);
  assert.match(source, /category: "penetration-testing"/);
});

test("renders contact, careers and editable case-study routes", async () => {
  const [contact, careers, caseStudy, industries, solutions] = await Promise.all([
    render("/contact"),
    render("/careers"),
    render("/case-studies/fintech-enterprise-readiness"),
    render("/industries"),
    render("/solutions"),
  ]);
  assert.equal(contact.status, 200);
  assert.match(await contact.text(), /Prepare email/);
  assert.equal(careers.status, 200);
  assert.match(await careers.text(), /No open careers right now/);
  assert.equal(caseStudy.status, 200);
  assert.match(await caseStudy.text(), /What needed to change/);
  assert.equal(industries.status, 200);
  assert.match(await industries.text(), /Financial services/);
  assert.equal(solutions.status, 200);
  assert.match(await solutions.text(), /Product Studio/);
});

test("renders the global standards globe page without loading it into the homepage", async () => {
  const [home, globe] = await Promise.all([render("/"), render("/global-standards")]);
  const homeHtml = await home.text();
  const globeHtml = await globe.text();

  assert.doesNotMatch(homeHtml, /GLOBAL STANDARDS EXPLORER/);
  assert.match(homeHtml, /Explore global standards/);
  assert.equal(globe.status, 200);
  assert.match(globeHtml, /Explore cyber standards by region/);
  assert.match(globeHtml, /GLOBAL STANDARDS EXPLORER/);
  assert.match(globeHtml, /ISO 27001 implementation/);
});

test("serves search-engine discovery files", async () => {
  const [robots, sitemap] = await Promise.all([render("/robots.txt"), render("/sitemap.xml")]);
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/cybergaar\.com\/sitemap\.xml/);
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.match(xml, /https:\/\/cybergaar\.com\/contact/);
  assert.match(xml, /https:\/\/cybergaar\.com\/industries/);
  assert.match(xml, /https:\/\/cybergaar\.com\/solutions/);
  assert.match(xml, /https:\/\/cybergaar\.com\/global-standards/);
  assert.match(xml, /https:\/\/cybergaar\.com\/case-studies\/fintech-enterprise-readiness/);
});

test("keeps client stories out of the primary navigation and exposes three mobile accordions", async () => {
  const header = await readFile(new URL("../app/components/SiteHeader.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(header, />Client stories</);
  assert.equal((header.match(/mobile-subnav-open/g) ?? []).length, 3);
  assert.match(header, /MSP partner programme/);
  assert.match(header, /Product Studio/);
  assert.match(header, /flagSrc: "\/flags\/global\.svg"/);
  assert.match(header, /flagSrc: "\/flags\/gb\.svg"/);
  assert.match(header, /flagSrc: "\/flags\/pk\.svg"/);
  assert.match(header, /region-current-label/);
  assert.match(header, /login-link/);
  assert.doesNotMatch(header, /login-icon/);
  await Promise.all([
    stat(new URL("../public/flags/global.svg", import.meta.url)),
    stat(new URL("../public/flags/gb.svg", import.meta.url)),
    stat(new URL("../public/flags/pk.svg", import.meta.url)),
  ]);
});
