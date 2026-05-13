import { Key, LucideIcon, Package, Scissors, ShieldCheck, ShoppingBag, Sparkles, Watch, Wrench } from "lucide-react";

export const SITE_URL = "https://lito073.github.io/de-rompert-craft-showcase";
export const SITE_NAME = "Schoenmakerij Donders";
export const BRAND_QUOTE = "Schoenen maken is niet zo bijzonder, iemand blij maken wel.";

export type OpeningHoursRow = {
  label: string;
  value: string;
  schemaDays?: string[];
  opens?: string;
  closes?: string;
};

export type LocationService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ShopLocation = {
  id: "vught" | "den-bosch";
  slug: string;
  city: string;
  name: string;
  shortName: string;
  address: {
    streetAddress: string;
    postalCode: string;
    locality: string;
    country: string;
  };
  phoneDisplay: string;
  phoneHref: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
  services: LocationService[];
  openingHours: OpeningHoursRow[];
  mapsQuery: string;
};

export const locations: ShopLocation[] = [
  {
    id: "vught",
    slug: "vught",
    city: "Vught",
    name: "Schoenmakerij Donders Vught",
    shortName: "Vught",
    address: {
      streetAddress: "Raadhuisstraat 3D",
      postalCode: "5261 EH",
      locality: "Vught",
      country: "NL",
    },
    phoneDisplay: "073 211 0379",
    phoneHref: "+31732110379",
    intro:
      "De eerste vestiging van Schoenmakerij Donders, gerund door Corne en Linda. Hier vindt u ambachtelijke reparatie, persoonlijke service en praktische winkelservices onder een dak.",
    seoTitle: "Schoenmakerij Donders Vught | Schoenreparatie, sleutels en lederwaren",
    seoDescription:
      "Schoenmakerij Donders Vught aan de Raadhuisstraat 3D voor schoenreparatie, tas reparatie, sleutelservice, onderhoud, horlogebandjes, luxe lederwaren en DHL servicepoint.",
    highlights: ["Familiebedrijf sinds 2017", "DHL servicepoint", "Luxe lederwaren"],
    services: [
      {
        title: "Schoenreparatie",
        description: "Vakkundige reparatie van schoenen met aandacht voor pasvorm, materiaal en levensduur.",
        icon: Scissors,
      },
      {
        title: "Tas reparatie",
        description: "Herstel van tassen, ritsen, naden en andere lederwaren met zorgvuldig vakwerk.",
        icon: ShoppingBag,
      },
      {
        title: "Sleutelservice",
        description: "Sleutels laten bijmaken en advies voor veelvoorkomende sleutelvragen.",
        icon: Key,
      },
      {
        title: "Onderhoud",
        description: "Onderhoudsproducten en advies om schoenen en leer langer mooi te houden.",
        icon: ShieldCheck,
      },
      {
        title: "Horlogebandjes",
        description: "Nieuwe horlogebandjes en hulp bij het passend maken of vervangen.",
        icon: Watch,
      },
      {
        title: "Luxe lederwaren",
        description: "Lederwaren van onder meer Castelijn & Beerens en Bear Design.",
        icon: ShoppingBag,
      },
      {
        title: "DHL servicepoint",
        description: "Pakketten verzenden en ophalen bij de vestiging in Vught.",
        icon: Package,
      },
    ],
    openingHours: [
      { label: "Zondag", value: "Gesloten" },
      { label: "Maandag", value: "Gesloten" },
      { label: "Dinsdag - vrijdag", value: "09:30 - 18:00", schemaDays: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "18:00" },
      { label: "Zaterdag", value: "09:30 - 17:00", schemaDays: ["Saturday"], opens: "09:30", closes: "17:00" },
    ],
    mapsQuery: "Schoenmakerij+Donders+Raadhuisstraat+3D+5261+EH+Vught",
  },
  {
    id: "den-bosch",
    slug: "den-bosch",
    city: "Den Bosch",
    name: "Schoenmakerij Donders Den Bosch",
    shortName: "Den Bosch",
    address: {
      streetAddress: "Rompertpassage 39",
      postalCode: "5233 AP",
      locality: "Den Bosch",
      country: "NL",
    },
    phoneDisplay: "073 211 0379",
    phoneHref: "+31732110379",
    intro:
      "De vestiging in Den Bosch is sinds 2025 geopend en wordt gerund door Jimmy, zoon van Corne. U vindt hier dezelfde klantvriendelijke service en kwaliteit in de Rompertpassage.",
    seoTitle: "Schoenmakerij Donders Den Bosch | Schoenreparatie, autosleutels en sneaker service",
    seoDescription:
      "Schoenmakerij Donders Den Bosch in de Rompertpassage voor schoenreparatie, tas reparatie, autosleutel service, onderhoud, sneaker service en luxe lederwaren.",
    highlights: ["In de Rompertpassage", "Autosleutel service", "Sneaker service"],
    services: [
      {
        title: "Schoenreparatie",
        description: "Ambachtelijke reparatie voor dagelijks schoeisel, nette schoenen en favoriete paren.",
        icon: Scissors,
      },
      {
        title: "Tas reparatie",
        description: "Reparatie van tassen en lederwaren, van kleine herstelpunten tot steviger vakwerk.",
        icon: ShoppingBag,
      },
      {
        title: "(Auto)Sleutel Service",
        description: "Sleutelservice voor gewone sleutels en autosleutelvragen.",
        icon: Key,
      },
      {
        title: "Onderhoud",
        description: "Onderhoud en advies voor leer, schoenen en materialen die langer mee mogen gaan.",
        icon: ShieldCheck,
      },
      {
        title: "Sneaker service",
        description: "Service voor sneakers, met aandacht voor herstel, verzorging en uitstraling.",
        icon: Sparkles,
      },
      {
        title: "Luxe lederwaren",
        description: "Lederwaren van onder meer Castelijn & Beerens en Bear Design.",
        icon: ShoppingBag,
      },
    ],
    openingHours: [
      { label: "Zondag", value: "Gesloten" },
      { label: "Maandag", value: "12:00 - 18:00", schemaDays: ["Monday"], opens: "12:00", closes: "18:00" },
      { label: "Dinsdag - vrijdag", value: "09:30 - 18:00", schemaDays: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "18:00" },
      { label: "Zaterdag", value: "09:30 - 17:00", schemaDays: ["Saturday"], opens: "09:30", closes: "17:00" },
    ],
    mapsQuery: "Schoenmakerij+Donders+Rompertpassage+39+5233+AP+Den+Bosch",
  },
];

export const featuredServices = [
  { title: "Schoenreparatie", icon: Scissors },
  { title: "Tas reparatie", icon: ShoppingBag },
  { title: "Sleutelservice", icon: Key },
  { title: "Onderhoud", icon: Wrench },
];

export const getLocationBySlug = (slug?: string) => locations.find((location) => location.slug === slug);

export const getLocationPath = (location: ShopLocation) => `/${location.slug}`;

export const getCanonicalUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

export const getMapsUrl = (location: ShopLocation) => `https://maps.google.com/?q=${location.mapsQuery}`;
