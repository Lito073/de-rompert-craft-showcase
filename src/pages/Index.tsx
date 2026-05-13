import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionWave from "@/components/SectionWave";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";
import { getOrganizationSchema } from "@/lib/structuredData";
import { BRAND_QUOTE, featuredServices, getLocationPath, getMapsUrl, locations } from "@/data/locations";
import { ArrowRight, KeyRound, MapPin, Phone, Quote, ShoppingBag, Wrench } from "lucide-react";
import heroCraftsmanAvif from "@/assets/hero-craftsman.avif";
import heroCraftsman from "@/assets/hero-craftsman.jpg";
import heroCraftsmanWebp from "@/assets/hero-craftsman.webp";
import serviceKeysAvif from "@/assets/service-keys.avif";
import serviceShoes from "@/assets/service-shoes.jpg";
import serviceShoesAvif from "@/assets/service-shoes.avif";
import serviceShoesWebp from "@/assets/service-shoes.webp";
import serviceKeys from "@/assets/service-keys.jpg";
import serviceKeysWebp from "@/assets/service-keys.webp";

type OptimizedImage = {
  avif: string;
  webp: string;
  jpg: string;
  alt: string;
  width: number;
  height: number;
};

const homepageImages = {
  hero: {
    avif: heroCraftsmanAvif,
    webp: heroCraftsmanWebp,
    jpg: heroCraftsman,
    alt: "Ambachtelijk werk bij Schoenmakerij Donders",
    width: 1620,
    height: 1080,
  },
  shoes: {
    avif: serviceShoesAvif,
    webp: serviceShoesWebp,
    jpg: serviceShoes,
    alt: "Schoenreparatie",
    width: 1613,
    height: 1080,
  },
  keys: {
    avif: serviceKeysAvif,
    webp: serviceKeysWebp,
    jpg: serviceKeys,
    alt: "Sleutelservice",
    width: 1440,
    height: 1080,
  },
} satisfies Record<string, OptimizedImage>;

const OptimizedPicture = ({
  image,
  className,
  loading = "lazy",
  fetchPriority,
}: {
  image: OptimizedImage;
  className: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
}) => (
  <picture>
    <source srcSet={image.avif} type="image/avif" />
    <source srcSet={image.webp} type="image/webp" />
    <img
      src={image.jpg}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
    />
  </picture>
);

const Index = () => {
  const brandHighlights = [
    { label: "Ambachtelijk schoenherstel", icon: Wrench },
    { label: "Luxe lederwaren", icon: ShoppingBag },
    { label: "Sleutelservice", icon: KeyRound },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Schoenmakerij Donders | Schoenmakerij in Vught en Den Bosch"
        description="Schoenmakerij Donders in Vught en Den Bosch voor schoenreparatie, sleutelservice, tas reparatie, onderhoud, lederwaren en praktische winkelservices."
      />
      <StructuredData data={getOrganizationSchema()} />
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-background py-14 lg:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 xl:gap-16 items-center">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Familiebedrijf sinds 2017</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-5 break-words">
                  Schoenmakerij Donders in Vught en Den Bosch
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  Voor schoenreparatie, sleutelservice, tas reparatie, onderhoud en lederwaren kunt u terecht bij onze vestigingen in
                  Vught en Den Bosch. Kies de winkel die u wilt bezoeken voor het juiste adres, de openingstijden en de diensten per
                  locatie.
                </p>
                <div className="mb-8 flex flex-wrap gap-2.5">
                  {brandHighlights.map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-md border border-accent/25 bg-accent/8 px-3 py-2 text-sm font-medium text-primary"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <Link
                      key={location.id}
                      to={getLocationPath(location)}
                      className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl hover:shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div>
                          <p className="text-sm text-muted-foreground">Vestiging</p>
                          <h2 className="text-2xl font-bold text-foreground">{location.shortName}</h2>
                        </div>
                        <ArrowRight className="h-6 w-6 text-accent transition-transform group-hover:translate-x-1" />
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-accent mt-0.5" />
                          <span>
                            {location.address.streetAddress}, {location.address.locality}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-accent" />
                          <span>{location.phoneDisplay}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-5 bg-secondary/30 blur-3xl" />
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <OptimizedPicture
                    image={homepageImages.hero}
                    className="h-[28rem] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-muted/35 pt-24 pb-16 lg:pt-28">
          <SectionWave tone="background" variant="gentle" />
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ambacht, service en kwaliteit</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We repareren wat waarde heeft, denken mee over de beste oplossing en helpen u graag met schoenen, sleutels,
                  tassen, onderhoud en lederwaren. Zo weet u snel welke vestiging past bij uw bezoek.
                </p>
                <div className="rounded-lg bg-primary text-primary-foreground p-6">
                  <Quote className="h-8 w-8 mb-4 opacity-80" />
                  <p className="text-xl font-semibold leading-snug">"{BRAND_QUOTE}"</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {featuredServices.map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-lg border border-border bg-card p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-accent/10 p-2 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">{title}</h3>
                    </div>
                  </div>
                ))}
                <div className="rounded-lg overflow-hidden sm:col-span-2 grid sm:grid-cols-2">
                  <OptimizedPicture image={homepageImages.shoes} className="h-56 w-full object-cover" />
                  <OptimizedPicture image={homepageImages.keys} className="h-56 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background pt-24 pb-20 lg:pt-28 lg:pb-24">
          <SectionWave tone="muted" variant="rolling" flip className="opacity-70" />
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Twee winkels, duidelijk gescheiden informatie</h2>
              <p className="text-muted-foreground text-lg">
                Bekijk per vestiging het adres, de route, openingstijden en diensten. Zo komt u direct bij de juiste winkel uit.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((location) => (
                <div key={location.id} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{location.name}</h3>
                  <div className="space-y-2 mb-6 text-muted-foreground">
                    <p>{location.address.streetAddress}</p>
                    <p>
                      {location.address.postalCode} {location.address.locality}
                    </p>
                    <p>{location.phoneDisplay}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <Link to={getLocationPath(location)}>Bekijk vestiging</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={getMapsUrl(location)} target="_blank" rel="noopener noreferrer">
                        Route
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
