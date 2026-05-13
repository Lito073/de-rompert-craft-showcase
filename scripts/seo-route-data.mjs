export const SITE_URL = "https://lito073.github.io/de-rompert-craft-showcase";
export const SITE_NAME = "Schoenmakerij Donders";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export const routes = [
  {
    path: "/",
    outputPath: "",
    title: "Schoenmakerij Donders | Schoenmakerij in Vught en Den Bosch",
    description:
      "Schoenmakerij Donders in Vught en Den Bosch voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, lederwaren en praktische winkelservices.",
    priority: "1.0",
    changefreq: "monthly",
    fallbackHeading: "Schoenmakerij Donders in Vught en Den Bosch",
    fallbackText:
      "Kies de vestiging in Vught of Den Bosch voor het juiste adres, de openingstijden, route en diensten zoals schoenreparatie, sleutelservice, tas reparatie, onderhoud en lederwaren.",
  },
  {
    path: "/vught",
    outputPath: "vught",
    title: "Schoenmakerij Donders Vught | Schoenreparatie en sleutelservice",
    description:
      "Schoenmakerij Donders Vught aan de Raadhuisstraat 3D voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, lederwaren en DHL servicepoint.",
    priority: "0.9",
    changefreq: "monthly",
    fallbackHeading: "Schoenmakerij Donders Vught",
    fallbackText:
      "Schoenmakerij Donders Vught vindt u aan de Raadhuisstraat 3D, 5261 EH Vught. Deze vestiging helpt met schoenreparatie, sleutelservice, tas reparatie, onderhoud, horlogebandjes, lederwaren en het DHL servicepoint.",
    type: "business.business",
  },
  {
    path: "/den-bosch",
    outputPath: "den-bosch",
    title: "Schoenmakerij Donders Den Bosch | Schoenreparatie en sneaker service",
    description:
      "Schoenmakerij Donders Den Bosch in de Rompertpassage voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, sneaker service en lederwaren.",
    priority: "0.9",
    changefreq: "monthly",
    fallbackHeading: "Schoenmakerij Donders Den Bosch",
    fallbackText:
      "Schoenmakerij Donders Den Bosch vindt u in de Rompertpassage aan Rompertpassage 39, 5233 AP Den Bosch. Deze vestiging helpt met schoenreparatie, tas reparatie, onderhoud, lederwaren, sneaker service en vragen over gewone sleutels en autosleutels.",
    type: "business.business",
  },
  {
    path: "/diensten",
    outputPath: "diensten",
    title: "Diensten | Schoenreparatie, sleutels en lederwaren",
    description:
      "Bekijk per vestiging de diensten van Schoenmakerij Donders: schoenreparatie, sleutelservice, tas reparatie, onderhoud, sneaker service, DHL servicepoint en lederwaren.",
    priority: "0.8",
    changefreq: "monthly",
    fallbackHeading: "Diensten per vestiging",
    fallbackText:
      "Niet elke vestiging biedt precies dezelfde services. Bekijk per winkel waar u terecht kunt voor schoenreparatie, sleutels, tassen, onderhoud, sneaker service, lederwaren of DHL-pakketten.",
  },
  {
    path: "/over-ons",
    outputPath: "over-ons",
    title: "Over ons | Familiebedrijf Schoenmakerij Donders",
    description:
      "Schoenmakerij Donders is een familiebedrijf sinds 2017 met vestigingen in Vught en Den Bosch. Lees over klantvriendelijkheid, service en degelijk vakwerk.",
    priority: "0.7",
    changefreq: "monthly",
    fallbackHeading: "Over Schoenmakerij Donders",
    fallbackText:
      "Schoenmakerij Donders is een familiebedrijf sinds 2017. Wat begon in Vught is uitgebreid naar Den Bosch, met dezelfde aandacht voor klantvriendelijkheid, service en degelijk vakwerk.",
  },
  {
    path: "/contact",
    outputPath: "contact",
    title: "Contact | Schoenmakerij Donders Vught en Den Bosch",
    description:
      "Neem contact op met Schoenmakerij Donders in Vught of Den Bosch. Bekijk per vestiging het adres, telefoonnummer, openingstijden en de route.",
    priority: "0.8",
    changefreq: "monthly",
    fallbackHeading: "Contact per vestiging",
    fallbackText:
      "Kies de vestiging die u wilt bezoeken voor het juiste adres, telefoonnummer, de openingstijden en de route naar Schoenmakerij Donders in Vught of Den Bosch.",
  },
  {
    path: "/veelgestelde-vragen",
    outputPath: "veelgestelde-vragen",
    title: "Veelgestelde vragen | Schoenmakerij Donders Vught en Den Bosch",
    description:
      "Antwoorden over schoenreparatie, sleutelservice, tas reparatie, DHL servicepoint en sneaker service bij Schoenmakerij Donders in Vught en Den Bosch.",
    priority: "0.5",
    changefreq: "monthly",
    fallbackHeading: "Veelgestelde vragen",
    fallbackText:
      "Korte antwoorden over onze vestigingen, diensten en praktische winkelinformatie, waaronder schoenreparatie, sleutelservice, DHL servicepoint en sneaker service.",
  },
  {
    path: "/faq",
    outputPath: "faq",
    canonicalPath: "/veelgestelde-vragen",
    title: "Veelgestelde vragen | Schoenmakerij Donders Vught en Den Bosch",
    description:
      "Antwoorden over schoenreparatie, sleutelservice, tas reparatie, DHL servicepoint en sneaker service bij Schoenmakerij Donders in Vught en Den Bosch.",
    priority: "0.5",
    changefreq: "monthly",
    includeInSitemap: false,
    fallbackHeading: "Veelgestelde vragen",
    fallbackText:
      "Korte antwoorden over onze vestigingen, diensten en praktische winkelinformatie. De canonieke pagina is /veelgestelde-vragen.",
  },
];

export const getCanonicalUrl = (route) => {
  const canonicalPath = route.canonicalPath ?? route.path;
  return `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
};
