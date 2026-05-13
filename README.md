# Schoenmakerij Donders Website

Publieke website voor Schoenmakerij Donders met twee duidelijk gescheiden vestigingen: Vught en Den Bosch.

## Over Het Project

De site helpt bezoekers vroeg kiezen welke vestiging zij willen bezoeken. Elke locatie heeft eigen diensten, adresgegevens, openingstijden en route-informatie.

Tijdelijke live URL:

https://lito073.github.io/de-rompert-craft-showcase

Een eventueel custom domain is nog een latere stap. Zolang dat onbekend is, blijven `SITE_URL`, `robots.txt`, `sitemap.xml` en de Vite `base` gericht op GitHub Pages.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide React

## Scripts

Gebruik op Windows bij voorkeur `npm.cmd`.

| Taak | Command |
| --- | --- |
| Dependencies installeren | `npm.cmd install` |
| Development server starten | `npm.cmd run dev` |
| Lint controleren | `npm.cmd run lint` |
| Productiebundel bouwen | `npm.cmd run build` |
| SEO-output controleren | `npm.cmd run check:seo` |
| Productiebundel lokaal previewen | `npm.cmd run preview` |

## SEO/GEO Build

De build maakt niet alleen een Vite bundle, maar schrijft ook statische routebestanden voor crawlers:

- `scripts/seo-route-data.mjs` bevat de publieke route metadata.
- `scripts/generate-static-routes.mjs` schrijft route-specifieke HTML, fallbacktekst en `sitemap.xml`.
- `scripts/check-seo-output.mjs` controleert of de belangrijkste SEO-output in `dist/` klopt.
- `public/robots.txt`, `public/llms.txt` en `public/llms-full.txt` worden mee gepubliceerd.

## Belangrijke Routes

- `/` - locatiekeuze
- `/vught` - vestiging Vught
- `/den-bosch` - vestiging Den Bosch
- `/diensten` - dienstenoverzicht per vestiging
- `/over-ons` - familiebedrijf-verhaal
- `/contact` - contactgegevens per vestiging
- `/veelgestelde-vragen` - algemene vragen

## Deployment

GitHub Pages deployt vanuit `main` via `.github/workflows/deploy.yml`.

De deploy workflow draait:

1. `npm ci`
2. `npm run lint`
3. `npm run build`
4. `npm run check:seo`
5. Upload van `dist` naar GitHub Pages

Een push naar `main` hoort dus alleen live te gaan als lint, build en SEO-output slagen.

## Assets En Content

Nieuwe publieke foto's en merkbeelden horen in `src/assets/` wanneer ze door de klant zijn goedgekeurd. Bestanden in `public/` zijn voor root-assets zoals `robots.txt`, `sitemap.xml`, favicons, Open Graph beeld en LLM-bestanden.

Belangrijke contentregel: voeg geen openingstijden, reviews, e-mailadressen, extra diensten, domeingegevens of andere bedrijfsfeiten toe zonder bevestigde bron.

## Oplevering

- Complete opleverchecklist: `docs/launch-readiness-checklist.md`
- SEO/GEO publicatiechecklist: `docs/seo-geo-publication-checklist.md`
