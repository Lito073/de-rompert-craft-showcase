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

export type LocationAnswer = {
  question: string;
  answer: string;
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
  answers: LocationAnswer[];
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
      "Bij Schoenmakerij Donders Vught aan de Raadhuisstraat 3D helpen Corne en Linda u met schoenreparatie, sleutelservice, tas reparatie, onderhoud, horlogebandjes, lederwaren en het DHL servicepoint. U krijgt persoonlijk advies en vakwerk met aandacht voor materiaal, pasvorm en dagelijks gebruik.",
    seoTitle: "Schoenmakerij Donders Vught | Schoenreparatie en sleutelservice",
    seoDescription:
      "Schoenmakerij Donders Vught aan de Raadhuisstraat 3D voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, lederwaren en DHL servicepoint.",
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
    answers: [
      {
        question: "Waar kan ik schoenen laten repareren in Vught?",
        answer:
          "Voor schoenreparatie in Vught kunt u terecht bij Schoenmakerij Donders aan de Raadhuisstraat 3D. Corne en Linda helpen u met herstel, onderhoud en advies voor schoenen, tassen en lederwaren.",
      },
      {
        question: "Welke services vindt u bij Schoenmakerij Donders Vught?",
        answer:
          "De vestiging in Vught biedt schoenreparatie, tas reparatie, sleutelservice, onderhoud, horlogebandjes, luxe lederwaren en een DHL servicepoint.",
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
      "Schoenmakerij Donders Den Bosch vindt u in de Rompertpassage. Jimmy helpt u hier met schoenreparatie, tas reparatie, onderhoud, lederwaren, sneaker service en vragen over gewone sleutels en autosleutels. De vestiging combineert ambachtelijk herstel met praktische service dicht bij huis.",
    seoTitle: "Schoenmakerij Donders Den Bosch | Schoenreparatie en sneaker service",
    seoDescription:
      "Schoenmakerij Donders Den Bosch in de Rompertpassage voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, sneaker service en lederwaren.",
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
    answers: [
      {
        question: "Waar vind ik een schoenmaker in Den Bosch Noord?",
        answer:
          "Schoenmakerij Donders Den Bosch zit in de Rompertpassage aan Rompertpassage 39. U kunt hier terecht voor schoenreparatie, tas reparatie, onderhoud, lederwaren en sneaker service.",
      },
      {
        question: "Kan ik in Den Bosch terecht voor sleutels en sneakers?",
        answer:
          "Ja. De vestiging in Den Bosch vermeldt sleutelservice voor gewone sleutels en autosleutelvragen, en biedt daarnaast sneaker service.",
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
