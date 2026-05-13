import { Link, Navigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionWave from "@/components/SectionWave";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/structuredData";
import { BRAND_QUOTE, getLocationBySlug, getLocationPath, getMapsUrl, locations } from "@/data/locations";
import { ArrowRight, Clock, MapPin, Phone, Quote } from "lucide-react";

const Location = () => {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  const otherLocations = locations.filter((item) => item.id !== location.id);

  return (
    <div className="min-h-screen bg-background">
      <SEO title={location.seoTitle} description={location.seoDescription} path={getLocationPath(location)} type="business.business" />
      <StructuredData
        data={[
          getLocalBusinessSchema(location),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: location.shortName, path: getLocationPath(location) },
          ]),
        ]}
      />
      <Navigation />
      <Breadcrumbs />

      <main>
        <section className="relative overflow-hidden py-14 lg:py-20 bg-[radial-gradient(circle_at_top_left,hsl(var(--secondary)/0.22),transparent_36rem)]">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">Vestiging {location.shortName}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
                  {location.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">{location.intro}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {location.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-primary">
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <a href={getMapsUrl(location)} target="_blank" rel="noopener noreferrer">
                      Route naar {location.shortName}
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={`tel:${location.phoneHref}`}>
                      <Phone className="h-5 w-5" />
                      {location.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </div>

              <aside className="rounded-lg border border-border bg-card p-6 shadow-lg">
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-1">Adres</h2>
                    <a href={getMapsUrl(location)} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                      {location.address.streetAddress}
                      <br />
                      {location.address.postalCode} {location.address.locality}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                  <h2 className="text-xl font-bold text-foreground">Openingstijden</h2>
                </div>
                <div className="space-y-3">
                  {location.openingHours.map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                      <span className="font-medium text-foreground">{row.label}</span>
                      <span className="text-right text-muted-foreground">{row.value}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-muted/35 pt-24 pb-16 lg:pt-28">
          <SectionWave tone="background" variant="gentle" />
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Diensten in {location.shortName}</h2>
              <p className="text-lg text-muted-foreground">
                Deze diensten horen specifiek bij de vestiging in {location.shortName}, zodat u meteen ziet waar u terecht kunt.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.services.map((service) => (
                <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background pt-20 pb-20 lg:pb-24">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
              <div className="rounded-lg bg-primary text-primary-foreground p-8">
                <Quote className="h-10 w-10 mb-5 opacity-80" />
                <p className="text-2xl font-semibold leading-snug">"{BRAND_QUOTE}"</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Familiebedrijf met aandacht voor mensen</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Schoenmakerij Donders staat voor klantvriendelijkheid, service en kwaliteit. Sinds de start in Vught is het bedrijf
                  gegroeid naar twee vestigingen, met dezelfde persoonlijke aanpak per winkel.
                </p>
                <div className="flex flex-wrap gap-3">
                  {otherLocations.map((otherLocation) => (
                    <Button key={otherLocation.id} asChild variant="outline">
                      <Link to={getLocationPath(otherLocation)}>Bekijk {otherLocation.shortName}</Link>
                    </Button>
                  ))}
                  <Button asChild variant="link">
                    <Link to="/over-ons">Lees het verhaal</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Location;
