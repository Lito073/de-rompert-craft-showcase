# Complete Opleverchecklist

Gebruik dit document als master checklist voor oplevering van de Schoenmakerij Donders website. Het is breder dan SEO: content, lokale vindbaarheid, AI/GEO, performance, afbeeldingen, toegankelijkheid, security, GitHub, analytics, deployment en overdracht.

## Status

Technische launch-fixes voor GitHub Pages in deze release: CI dwingt lint, build en SEO-check af; onbekende routes tonen de 404-pagina; AI-search crawlers mogen crawlen, maar training crawlers worden geblokkeerd. Klantvalidatie, Google Business Profiles, Search Console, Bing Webmaster Tools, analytics, juridische/privacy-keuzes en live performance/structured-data controles blijven expliciete open opleveracties.

## 1. Content En Klantcontrole

- [ ] Controleer alle bedrijfsnamen exact met de klant: `Schoenmakerij Donders`, `Schoenmakerij Donders Vught`, `Schoenmakerij Donders Den Bosch`.
- [ ] Controleer per vestiging het adres:
  - [ ] Vught: Raadhuisstraat 3D, 5261 EH Vught.
  - [ ] Den Bosch: Rompertpassage 39, 5233 AP Den Bosch.
- [ ] Controleer het telefoonnummer `073 211 0379` en of beide vestigingen hetzelfde nummer mogen tonen.
- [ ] Controleer openingstijden per vestiging tegen de klant of Google Business Profile.
- [ ] Controleer diensten per vestiging; niets publiceren dat niet echt wordt aangeboden.
- [ ] Controleer namen van personen in de copy: Corne, Linda en Jimmy.
- [ ] Controleer merkquote: "Schoenen maken is niet zo bijzonder, iemand blij maken wel."
- [ ] Controleer spelling en stijl: Nederlands, `u`-vorm, warm maar zakelijk.
- [ ] Verwijder of herschrijf elke tekst die klinkt als verzonnen review, garantie of claim.
- [ ] Controleer dat er geen privegegevens, klantmails, providergegevens, wachtwoorden of interne notities in publieke docs staan.
- [ ] Maak een klantversie van de opleverchecklist zonder technische details als de klant die nodig heeft.

## 2. Informatiearchitectuur En UX

- [ ] Home laat direct kiezen tussen Vught en Den Bosch.
- [ ] Locatiepagina's zijn duidelijk gescheiden.
- [ ] Hoofdnavigatie werkt op desktop en mobiel.
- [ ] Mobiel menu opent, sluit en linkt correct.
- [ ] Breadcrumbs werken op alle subpagina's.
- [ ] Contactinformatie is op mobiel snel scanbaar.
- [ ] `tel:` links werken op mobiel.
- [ ] Routeknoppen openen Google Maps in een nieuw venster.
- [ ] FAQ-antwoorden zijn kort, feitelijk en niet dubbelzinnig.
- [ ] 404-pagina is bereikbaar en linkt terug naar bruikbare routes.
- [ ] Alle CTA's hebben duidelijke labels, niet alleen "klik hier".

## 3. SEO Copy

- [ ] Elke belangrijke pagina heeft precies een duidelijke H1.
- [ ] H1's bevatten logisch de hoofdentiteit of locatie.
- [ ] Elke pagina heeft een unieke title.
- [ ] Elke pagina heeft een unieke meta description.
- [ ] Titles zijn leesbaar en niet volgestopt met keywords.
- [ ] Meta descriptions zijn korte, klikkende samenvattingen.
- [ ] Locatiekeywords staan natuurlijk in tekst: `schoenmaker Vught`, `schoenmaker Den Bosch`, `schoenreparatie`, `sleutelservice`.
- [ ] Dienstnamen komen overeen met echte klantwoorden, niet alleen interne termen.
- [ ] Copy beantwoordt lokale intenties: waar, wanneer, welke dienst, welke vestiging.
- [ ] FAQ bevat vraag-en-antwoordvorm die ook door AI-antwoorden kan worden begrepen.
- [ ] Geen verborgen SEO-tekst toevoegen.
- [ ] Geen `meta keywords` als beslissend SEO-middel behandelen; Google gebruikt die niet voor ranking.

## 4. Technische SEO

- [ ] `scripts/seo-route-data.mjs` is de centrale bron voor publieke route metadata.
- [ ] `npm.cmd run build` genereert route-specifieke HTML in `dist/`.
- [ ] Elke route heeft statische fallbacktekst in `#root`.
- [ ] Elke route heeft canonical URL.
- [ ] `/faq` canonicaliseert naar `/veelgestelde-vragen`.
- [ ] `sitemap.xml` wordt uit dezelfde route metadata gegenereerd.
- [ ] `robots.txt` verwijst naar de juiste sitemap.
- [ ] `dist/index.html`, `dist/vught/index.html`, `dist/den-bosch/index.html`, `dist/diensten/index.html`, `dist/contact/index.html`, `dist/veelgestelde-vragen/index.html` bestaan na build.
- [ ] `npm.cmd run check:seo` slaagt.
- [ ] Google Search Console URL Inspection toont dat Google de belangrijkste content kan renderen.
- [ ] Valideer HTML met W3C Nu Checker: https://validator.w3.org/nu/
- [ ] Geen belangrijke content uitsluitend na interactie of alleen in afbeeldingen.
- [ ] Alle interne links zijn echte `<a>`/React Router links met crawlbare routepaden.
- [ ] Geen onbedoelde `noindex`, `nofollow` of robots-blokkade.
- [ ] Controleer de site met `site:` zoekopdrachten nadat Google heeft geindexeerd.

## 5. Structured Data

- [ ] `Organization` schema staat op de homepagina.
- [ ] `LocalBusiness` schema staat op elke locatiepagina.
- [ ] `BreadcrumbList` schema staat op subpagina's.
- [ ] `FAQPage` schema staat alleen op pagina's waar de FAQ zichtbaar is.
- [ ] Structured data komt overeen met zichtbare tekst.
- [ ] Geen reviews of ratings toevoegen tenzij de website zelf echte reviews toont en richtlijnen gevolgd worden.
- [ ] Geen `geo` coordinaten toevoegen zonder bevestigde coordinaten.
- [ ] Geen `sameAs` links toevoegen zonder officiele profielen.
- [ ] Gebruik crawlbare absolute image URLs voor `image`.
- [ ] Valideer met Google Rich Results Test.
- [ ] Controleer JSON-LD in de browser na build, niet alleen in broncode.

## 6. Lokale Vindbaarheid

- [ ] Google Business Profile bestaat per fysieke vestiging.
- [ ] Naam, adres en telefoon zijn exact gelijk op website, GBP en andere vermeldingen.
- [ ] Primaire categorie is specifiek en juist.
- [ ] Diensten in GBP komen overeen met website.
- [ ] Openingstijden in GBP komen overeen met website.
- [ ] Feestdagen en afwijkende openingstijden worden ingesteld.
- [ ] Foto's van buitenkant, binnenkant, balie, team en werk worden toegevoegd.
- [ ] Website-link in GBP wijst naar de juiste locatiepagina of homekeuze.
- [ ] Route/Maps-link werkt per vestiging.
- [ ] Reviews actief verzamelen via een nette klantflow.
- [ ] Reviews beantwoorden zonder privegegevens te noemen.
- [ ] Lokale vermeldingen controleren: Apple Maps, Bing Places, telefoonboeken, winkelcentrum/verzamelpagina's.
- [ ] NAP-consistentie vastleggen in een publiek-veilige notitie: Name, Address, Phone.

## 7. GEO, AI Search En LLM-Bestanden

- [ ] `public/llms.txt` is bereikbaar op `/llms.txt`.
- [ ] `public/llms-full.txt` is bereikbaar op `/llms-full.txt`.
- [ ] `llms.txt` bevat alleen publieke, zichtbare informatie.
- [ ] `llms-full.txt` bevat geen geheime klantcontext of interne aantekeningen.
- [ ] `llms.txt` linkt naar belangrijkste pagina's.
- [ ] `llms-full.txt` benoemt beperkingen: niets verzinnen, geen ongepubliceerde gegevens.
- [ ] `robots.txt` staat `OAI-SearchBot` toe voor ChatGPT Search.
- [ ] `robots.txt` staat `ChatGPT-User` toe voor user-triggered fetches.
- [ ] `GPTBot` is alleen toegestaan als de klant AI-training niet wil blokkeren.
- [ ] Leg expliciet vast of AI-training toegestaan of geblokkeerd moet worden.
- [ ] Controleer ChatGPT, Perplexity, Copilot en Gemini handmatig met lokale zoekvragen na indexering.
- [ ] Meet referrals vanuit ChatGPT, onder meer `utm_source=chatgpt.com`.
- [ ] Controleer Bing Webmaster Tools AI Performance wanneer data beschikbaar is.
- [ ] Behandel `llms.txt` als experimenteel extra signaal, niet als vervanging voor goede HTML, SEO en indexering.

## 8. Robots.txt Checklist

- [ ] Bestand staat op root: `/robots.txt`.
- [ ] UTF-8 plain text.
- [ ] `User-agent: *` heeft geen onbedoelde `Disallow: /`.
- [ ] Sitemap URL is absoluut en klopt met het live domein.
- [ ] AI/search bots zijn bewust gekozen:
  - [ ] `OAI-SearchBot`
  - [ ] `ChatGPT-User`
  - [ ] `GPTBot`
  - [ ] eventueel `PerplexityBot`
  - [ ] eventueel `ClaudeBot`
  - [ ] eventueel `Google-Extended`
- [ ] Beslis apart over search visibility versus training crawlers.
- [ ] Test robots met Google Search Console en Bing Webmaster Tools.
- [ ] Controleer dat CSS, JS en afbeeldingen niet geblokkeerd worden.

## 9. Sitemap Checklist

- [ ] `sitemap.xml` staat op root.
- [ ] Alleen canonieke publieke URLs opnemen.
- [ ] `/faq` niet opnemen als duplicaat van `/veelgestelde-vragen`.
- [ ] Alle locatiepagina's opnemen.
- [ ] Geen 404, redirect-only of private URLs opnemen.
- [ ] Sitemap URL in `robots.txt` zetten.
- [ ] Indienen in Google Search Console.
- [ ] Indienen in Bing Webmaster Tools.
- [ ] Na domeinwijziging alle sitemap URLs opnieuw genereren.

## 10. Afbeeldingen En Media

- [ ] Vervang sfeerbeelden door echte goedgekeurde winkel-, team- en werkfoto's zodra beschikbaar.
- [ ] Controleer rechten/licenties voor alle foto's.
- [ ] Maak per belangrijk beeld een bronbestand buiten de repo of in een afgesproken assetmap.
- [ ] Exporteer foto's op doelgrootte; geen 4000px bronfoto's shippen voor kleine cards.
- [ ] Hero-afbeelding optimaliseren voor LCP.
- [ ] Overweeg AVIF/WebP varianten voor grote JPG's.
- [ ] Houd JPEG fallback waar nodig.
- [ ] Controleer huidige grootste bestanden:
  - [ ] `src/assets/service-bags.jpg` ongeveer 490 KB.
  - [ ] `src/assets/hero-craftsman.jpg` ongeveer 433 KB.
  - [ ] `src/assets/key-making-1.jpg` en `key-making-2.jpg` ongeveer 386-388 KB.
- [ ] Voeg `width` en `height` of vaste aspect ratio toe waar layout shift kan ontstaan.
- [ ] Gebruik `loading="lazy"` voor niet-kritieke afbeeldingen.
- [ ] Gebruik eager/preload/fetchpriority voor de LCP hero-afbeelding als meting dat nodig maakt.
- [ ] Controleer alt-teksten: beschrijvend waar zinvol, leeg alleen bij decoratief beeld.
- [ ] Vermijd tekst in afbeeldingen tenzij het logo/merkbeeld is.
- [ ] Controleer `og-image.jpg`: juiste afmeting, scherpe branding, lager dan circa 300 KB.
- [ ] Favicon werkt als SVG en ICO.
- [ ] Geen ongebruikte placeholders of oude exports in `public/` of `src/assets/`.

## 11. Performance En Core Web Vitals

- [ ] Run Lighthouse/PageSpeed voor mobiel en desktop.
- [ ] Run lokale projectchecks:
  - [ ] `npm.cmd run lint`
  - [ ] `npm.cmd run build`
  - [ ] `npm.cmd run check:seo`
  - [ ] `npm.cmd run optimize:images` na toevoegen of vervangen van JPG-assets.
- [ ] Run Lighthouse CLI voor herhaalbare audits:
  - [ ] Mobile: `npx.cmd -y lighthouse@latest https://lito073.github.io/de-rompert-craft-showcase/ --quiet --chrome-flags="--headless --no-sandbox" --form-factor=mobile --screenEmulation.mobile=true --screenEmulation.width=390 --screenEmulation.height=844 --screenEmulation.deviceScaleFactor=3 --throttling-method=simulate`
  - [ ] Desktop: `npx.cmd -y lighthouse@latest https://lito073.github.io/de-rompert-craft-showcase/ --quiet --chrome-flags="--headless --no-sandbox" --preset=desktop`
- [ ] Gebruik PageSpeed Insights voor Google/Lighthouse labdata en eventuele Core Web Vitals fielddata: https://pagespeed.web.dev/
- [ ] Gebruik WebPageTest voor waterfall, repeat-view caching, locatiekeuze en netwerkprofielen: https://www.webpagetest.org/
- [ ] Meet live URL, niet alleen lokale preview.
- [ ] LCP doel: goed rond of onder 2,5s.
- [ ] INP doel: goed rond of onder 200ms.
- [ ] CLS doel: goed rond of onder 0,1.
- [ ] Controleer bundle size na build.
- [ ] Verwijder ongebruikte dependencies.
- [ ] Verwijder ongebruikte shadcn/ui componenten alleen als dat veilig is en tree-shaking onvoldoende helpt.
- [ ] Controleer of fonts lokaal/systeemfont zijn of externe requests veroorzaken.
- [ ] Controleer caching van assets op GitHub Pages.
- [ ] Test op mobiel netwerkprofiel in DevTools.
- [ ] Geen console errors.
- [ ] Geen netwerk 404s voor assets, favicon, sitemap, robots of llms-bestanden.

## 12. Toegankelijkheid

- [ ] Streef naar WCAG 2.2 AA waar praktisch.
- [ ] Pagina's hebben logische headingvolgorde.
- [ ] Contrast voldoet voor tekst, knoppen en links.
- [ ] Focus states zijn zichtbaar.
- [ ] Alles is met toetsenbord bereikbaar.
- [ ] Mobiel menu is keyboard- en screenreader-vriendelijk.
- [ ] `aria-label` alleen gebruiken waar de zichtbare tekst niet genoeg is.
- [ ] Links hebben zinvolle labels.
- [ ] Accordion/FAQ werkt met toetsenbord.
- [ ] Afbeeldingen hebben passende alt-teksten.
- [ ] Geen tekstoverlap op 320px, 375px, 390px, 768px, 1024px en desktop.
- [ ] Test met Lighthouse accessibility.
- [ ] Test met axe DevTools of vergelijkbaar: https://www.deque.com/axe/
- [ ] Test met WAVE voor visuele accessibility feedback: https://wave.webaim.org/
- [ ] Handmatig screenreader smoke-testen met NVDA of VoiceOver waar mogelijk.

## 13. Browser En Device QA

- [ ] Chrome desktop.
- [ ] Edge desktop.
- [ ] Firefox desktop.
- [ ] Safari/iOS als beschikbaar.
- [ ] Android Chrome als beschikbaar.
- [ ] Breedtes: 320, 375, 390, 768, 1024, 1440.
- [ ] Controleer home, Vught, Den Bosch, diensten, over ons, contact, FAQ en 404.
- [ ] Controleer scrollgedrag na routewissel.
- [ ] Controleer sticky nav op mobiel en desktop.
- [ ] Controleer dat kaarten/cards geen tekst afsnijden.
- [ ] Controleer dat route- en telefoonlinks niet per ongeluk verborgen zijn.

## 14. Security, Privacy En Hosting

- [ ] GitHub Pages HTTPS staat aan en wordt afgedwongen.
- [ ] Geen mixed content; alle assets via HTTPS.
- [ ] Geen secrets in repo, docs, config, commits of Actions logs.
- [ ] Geen `.env` committen.
- [ ] Geen prive klantbriefs committen.
- [ ] Controleer `.gitignore` voor lokale/private paden.
- [ ] Als custom security headers nodig zijn, overweeg Cloudflare of andere CDN voor CSP/HSTS/Referrer-Policy.
- [ ] Als geen CDN gebruikt wordt, leg vast dat GitHub Pages beperkte headercontrole heeft.
- [ ] Test headers met MDN HTTP Observatory: https://developer.mozilla.org/en-US/observatory
- [ ] Test headers met SecurityHeaders.com: https://securityheaders.com/
- [ ] Bij custom hosting/CDN pas security headers actief toe: `Content-Security-Policy`, `Referrer-Policy`, `Permissions-Policy`, `X-Content-Type-Options` en lange cache headers voor fingerprinted assets.
- [ ] Overweeg `<meta name="referrer" content="strict-origin-when-cross-origin">` als header niet kan.
- [ ] Externe links gebruiken `rel="noopener noreferrer"` bij `target="_blank"`.
- [ ] Geen third-party tracking toevoegen zonder toestemming/cookiebeleid.
- [ ] Als analytics wordt toegevoegd, controleer AVG/cookie-impact.

## 15. GitHub Repo Opschonen

- [ ] `git status --short --branch` is schoon voor oplevering.
- [ ] Verwijder tijdelijke bestanden zoals logs, screenshots, testexports en foutbestanden.
- [ ] Controleer of `gcm-diagnose.log` bewust in repo staat; meestal hoort dit niet publiek.
- [ ] Controleer of `bun.lockb` nodig is naast `package-lock.json`; kies bij voorkeur een package manager.
- [ ] Controleer `start-server.sh`; Windows-project gebruikt primair `npm.cmd`.
- [ ] Controleer of `vercel.json` nodig is als GitHub Pages de deployment is.
- [ ] Controleer ongebruikte assets in `src/assets/` en `public/`.
- [ ] Controleer ongebruikte shadcn/ui componenten.
- [ ] Controleer oude branches en open PRs.
- [ ] Controleer GitHub repository description, topics en website URL.
- [ ] Controleer GitHub Pages settings: source via Actions, custom domain, HTTPS.
- [ ] Zet branch protection aan voor `main` als het project serieuzer wordt.
- [ ] Actions workflow moet `npm ci`, `npm run build` en eventueel `npm run lint`/`npm run check:seo` draaien.
- [ ] Voeg `npm run check:seo` toe aan CI voordat deploy plaatsvindt.
- [ ] Controleer dat deploy faalt als SEO-output niet klopt.

## 16. README Bijwerken

- [ ] Beschrijf projectdoel in 2-3 zinnen.
- [ ] Vermeld live URL.
- [ ] Vermeld stack.
- [ ] Vermeld alle scripts:
  - [ ] `npm.cmd install`
  - [ ] `npm.cmd run dev`
  - [ ] `npm.cmd run lint`
  - [ ] `npm.cmd run build`
  - [ ] `npm.cmd run check:seo`
  - [ ] `npm.cmd run preview`
- [ ] Leg uit dat `scripts/seo-route-data.mjs` de route metadata bron is.
- [ ] Leg uit dat build statische route HTML genereert.
- [ ] Link naar deze opleverchecklist.
- [ ] Link naar SEO/GEO publicatiechecklist.
- [ ] Leg GitHub Pages deployflow uit.
- [ ] Noteer waar nieuwe foto's/assets moeten komen.
- [ ] Noteer contentregel: geen feiten verzinnen.

## 17. CI/CD En Deployment

- [ ] `.github/workflows/deploy.yml` draait op push naar `main`.
- [ ] Workflow gebruikt `npm ci`.
- [ ] Workflow draait `npm run lint`.
- [ ] Workflow draait `npm run build`.
- [ ] Workflow draait `npm run check:seo`.
- [ ] Artifact path is `dist`.
- [ ] GitHub Pages environment URL wordt correct getoond.
- [ ] Na deploy live pagina openen.
- [ ] Live `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt` controleren.
- [ ] Cache-invalidering controleren na wijziging van assets.
- [ ] Bij custom domain: Vite `base` aanpassen naar `/`.
- [ ] Bij custom domain: `SITE_URL` aanpassen.
- [ ] Bij custom domain: GitHub Pages CNAME/instellingen en HTTPS controleren.

## 18. Analytics En Monitoring

- [ ] Kies analytics-oplossing: GA4, Plausible, Simple Analytics of geen analytics.
- [ ] Leg keuze en privacy-impact vast.
- [ ] Meet klik op telefoonnummer.
- [ ] Meet routeknoppen.
- [ ] Meet locatiekeuze Vught/Den Bosch.
- [ ] Meet ChatGPT referrals waar mogelijk.
- [ ] Controleer Search Console maandelijks op indexering, queries en fouten.
- [ ] Controleer Bing Webmaster Tools maandelijks op indexering en AI Performance.
- [ ] Controleer Pages deploy status na elke push.
- [ ] Maak onderhoudsritme: maandelijkse content/GBP check, kwartaal performance check.

## 19. Juridisch En Vertrouwen

- [ ] Controleer of privacyverklaring nodig is bij analytics, contactformulier of tracking.
- [ ] Geen contactformulier toevoegen zonder spam/privacy-afweging.
- [ ] Geen cookie banner nodig maken als er geen niet-noodzakelijke cookies zijn.
- [ ] Fototoestemming regelen voor herkenbare personen.
- [ ] Merken zoals DHL, Castelijn & Beerens en Bear Design alleen noemen als dat klopt en toegestaan is.
- [ ] Geen keurmerken of partnerschappen tonen zonder toestemming.
- [ ] Geen reviews of sterren tonen zonder bron en toestemming.

## 20. Acceptatiecriteria Voor Oplevering

- [ ] Klant heeft content, adressen, diensten, telefoon en openingstijden goedgekeurd.
- [ ] `npm.cmd run lint` geeft 0 errors; bestaande warnings zijn beoordeeld.
- [ ] `npm.cmd run build` slaagt.
- [ ] `npm.cmd run check:seo` slaagt.
- [ ] Live deploy is bereikbaar via HTTPS.
- [ ] Live sitemap en robots zijn bereikbaar.
- [ ] Live `llms.txt` en `llms-full.txt` zijn bereikbaar.
- [ ] Desktop en mobiel zijn visueel gecontroleerd.
- [ ] Lighthouse/PageSpeed is gedraaid en bevindingen zijn vastgelegd.
- [ ] Structured data is gevalideerd.
- [ ] Google Search Console is ingesteld.
- [ ] Bing Webmaster Tools is ingesteld.
- [ ] Google Business Profiles zijn gecontroleerd of als klantactie genoteerd.
- [ ] README is bijgewerkt.
- [ ] Repo is opgeschoond.
- [ ] Laatste commit is gepusht naar `main`.

## 21. Bronnen En Richtlijnen

- Google Search Central SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google image SEO best practices: https://developers.google.com/search/docs/appearance/google-images
- Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Business Profile local ranking guidance: https://support.google.com/business/answer/7091
- Google robots.txt documentation: https://developers.google.com/search/reference/robots_txt
- OpenAI publisher/search crawler guidance: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Bing AI Performance announcement: https://blogs.bing.com/webmaster/February-2026-284b440771373a5a245425a5d31a8ad6/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- web.dev Core Web Vitals/performance guidance: https://web.dev/performance
- web.dev LCP guidance: https://web.dev/articles/lcp
- GitHub Pages HTTPS guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- GitHub Pages custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- MDN Referrer-Policy: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy
- MDN HTTP headers overview: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers
- WCAG 2.2 W3C recommendation: https://www.w3.org/TR/WCAG22/
