import { readFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = "dist";
const siteUrl = "https://lito073.github.io/de-rompert-craft-showcase";

const routeChecks = [
  {
    path: "/",
    file: "index.html",
    title: "Schoenmakerij Donders | Schoenmakerij in Vught en Den Bosch",
    description:
      "Schoenmakerij Donders in Vught en Den Bosch voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, lederwaren en praktische winkelservices.",
    fallback: "Kies de vestiging in Vught of Den Bosch",
    canonical: siteUrl,
  },
  {
    path: "/vught",
    file: join("vught", "index.html"),
    title: "Schoenmakerij Donders Vught | Schoenreparatie en sleutelservice",
    description:
      "Schoenmakerij Donders Vught aan de Raadhuisstraat 3D voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, lederwaren en DHL servicepoint.",
    fallback: "Raadhuisstraat 3D",
    canonical: `${siteUrl}/vught`,
  },
  {
    path: "/den-bosch",
    file: join("den-bosch", "index.html"),
    title: "Schoenmakerij Donders Den Bosch | Schoenreparatie en sneaker service",
    description:
      "Schoenmakerij Donders Den Bosch in de Rompertpassage voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, sneaker service en lederwaren.",
    fallback: "Rompertpassage 39",
    canonical: `${siteUrl}/den-bosch`,
  },
  {
    path: "/diensten",
    file: join("diensten", "index.html"),
    title: "Diensten | Schoenreparatie, sleutels en lederwaren",
    description:
      "Bekijk per vestiging de diensten van Schoenmakerij Donders: schoenreparatie, sleutelservice, tas reparatie, onderhoud, sneaker service, DHL servicepoint en lederwaren.",
    fallback: "Niet elke vestiging biedt precies dezelfde services",
    canonical: `${siteUrl}/diensten`,
  },
  {
    path: "/veelgestelde-vragen",
    file: join("veelgestelde-vragen", "index.html"),
    title: "Veelgestelde vragen | Schoenmakerij Donders Vught en Den Bosch",
    description:
      "Antwoorden over schoenreparatie, sleutelservice, tas reparatie, DHL servicepoint en sneaker service bij Schoenmakerij Donders in Vught en Den Bosch.",
    fallback: "Korte antwoorden over onze vestigingen",
    canonical: `${siteUrl}/veelgestelde-vragen`,
  },
];

const assertIncludes = (content, expected, label) => {
  if (!content.includes(expected)) {
    throw new Error(`${label} mist: ${expected}`);
  }
};

for (const route of routeChecks) {
  const html = await readFile(join(distDir, route.file), "utf8");
  assertIncludes(html, `<title>${route.title}</title>`, `${route.path} title`);
  assertIncludes(html, `content="${route.description}"`, `${route.path} description`);
  assertIncludes(html, `href="${route.canonical}"`, `${route.path} canonical`);
  assertIncludes(html, `property="og:url" content="${route.canonical}"`, `${route.path} og:url`);
  assertIncludes(html, route.fallback, `${route.path} fallback`);
}

const sitemap = await readFile(join(distDir, "sitemap.xml"), "utf8");
for (const route of routeChecks) {
  assertIncludes(sitemap, `<loc>${route.canonical}</loc>`, `sitemap ${route.path}`);
}

const robots = await readFile(join(distDir, "robots.txt"), "utf8");
assertIncludes(robots, "User-agent: OAI-SearchBot", "robots OAI-SearchBot");
assertIncludes(robots, "User-agent: ChatGPT-User", "robots ChatGPT-User");

const llms = await readFile(join(distDir, "llms.txt"), "utf8");
assertIncludes(llms, "# Schoenmakerij Donders", "llms title");
assertIncludes(llms, "[Locatie Vught]", "llms Vught");
assertIncludes(llms, "[Locatie Den Bosch]", "llms Den Bosch");

console.log(`SEO output checks passed for ${routeChecks.length} canonical routes.`);
