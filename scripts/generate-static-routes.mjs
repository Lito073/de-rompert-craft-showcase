import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, getCanonicalUrl, routes } from "./seo-route-data.mjs";

const distDir = "dist";
const indexFile = join(distDir, "index.html");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const replaceFirst = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`Could not find HTML pattern: ${pattern}`);
  }

  return html.replace(pattern, replacement);
};

const setMetaContent = (html, selector, content) => {
  const escaped = escapeHtml(content);
  return replaceFirst(
    html,
    new RegExp(`(<meta\\s+${selector}[\\s\\S]*?content=")[^"]*("[\\s\\S]*?/?>)`),
    `$1${escaped}$2`,
  );
};

const setLinkHref = (html, selector, href) => {
  const escaped = escapeHtml(href);
  return replaceFirst(
    html,
    new RegExp(`(<link\\s+${selector}[\\s\\S]*?href=")[^"]*("[\\s\\S]*?/?>)`),
    `$1${escaped}$2`,
  );
};

const createFallbackHtml = (route) => `
      <main>
        <h1>${escapeHtml(route.fallbackHeading)}</h1>
        <p>${escapeHtml(route.fallbackText)}</p>
        <p>Bel voor actuele vragen naar 073 211 0379 of kies de juiste vestiging op de website.</p>
      </main>
    `;

const applyRouteMetadata = (baseHtml, route) => {
  const canonicalUrl = getCanonicalUrl(route);
  let html = baseHtml;

  html = replaceFirst(html, /<title>.*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  html = setMetaContent(html, 'name="title"', route.title);
  html = setMetaContent(html, 'name="description"', route.description);
  html = setLinkHref(html, 'rel="canonical"', canonicalUrl);
  html = setMetaContent(html, 'property="og:type"', route.type ?? "website");
  html = setMetaContent(html, 'property="og:url"', canonicalUrl);
  html = setMetaContent(html, 'property="og:title"', route.title);
  html = setMetaContent(html, 'property="og:description"', route.description);
  html = setMetaContent(html, 'property="og:image"', DEFAULT_IMAGE);
  html = setMetaContent(html, 'property="og:site_name"', SITE_NAME);
  html = setMetaContent(html, 'name="twitter:url"', canonicalUrl);
  html = setMetaContent(html, 'name="twitter:title"', route.title);
  html = setMetaContent(html, 'name="twitter:description"', route.description);
  html = setMetaContent(html, 'name="twitter:image"', DEFAULT_IMAGE);
  html = replaceFirst(html, /<div id="root">[\s\S]*?<\/div>/, `<div id="root">${createFallbackHtml(route)}</div>`);

  return html;
};

const createSitemap = () => {
  const urls = routes
    .filter((route) => route.includeInSitemap !== false)
    .map(
      (route) => `  <url>
    <loc>${getCanonicalUrl(route)}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

const baseHtml = await readFile(indexFile, "utf8");

for (const route of routes) {
  const routeIndex = route.outputPath ? join(distDir, route.outputPath, "index.html") : indexFile;
  await mkdir(dirname(routeIndex), { recursive: true });
  await writeFile(routeIndex, applyRouteMetadata(baseHtml, route), "utf8");
}

await writeFile(join(distDir, "sitemap.xml"), createSitemap(), "utf8");

await copyFile(indexFile, join(distDir, "404.html"));

console.log(`Generated ${routes.length} static route files and sitemap for ${SITE_URL}.`);
