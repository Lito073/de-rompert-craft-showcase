import { BRAND_QUOTE, getCanonicalUrl, getLocationPath, ShopLocation, SITE_NAME, SITE_URL, locations } from "@/data/locations";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: getCanonicalUrl(item.path),
  })),
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  slogan: BRAND_QUOTE,
  department: locations.map((location) => ({
    "@type": "LocalBusiness",
    name: location.name,
    url: getCanonicalUrl(getLocationPath(location)),
    telephone: location.phoneHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.streetAddress,
      postalCode: location.address.postalCode,
      addressLocality: location.address.locality,
      addressCountry: location.address.country,
    },
  })),
});

export const getLocalBusinessSchema = (location: ShopLocation) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: location.name,
  url: getCanonicalUrl(getLocationPath(location)),
  image: `${SITE_URL}/favicon.svg`,
  telephone: location.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: location.address.streetAddress,
    postalCode: location.address.postalCode,
    addressLocality: location.address.locality,
    addressCountry: location.address.country,
  },
  openingHoursSpecification: location.openingHours
    .filter((row) => row.schemaDays && row.opens && row.closes)
    .map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.schemaDays,
      opens: row.opens,
      closes: row.closes,
    })),
  makesOffer: location.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
});
