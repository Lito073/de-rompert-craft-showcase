import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";
import { getOrganizationSchema } from "@/lib/structuredData";
import { BRAND_QUOTE, featuredServices, getLocationPath, getMapsUrl, locations } from "@/data/locations";
import { ArrowRight, MapPin, Phone, Quote } from "lucide-react";
import heroCraftsman from "@/assets/hero-craftsman.jpg";
import serviceShoes from "@/assets/service-shoes.jpg";
import serviceKeys from "@/assets/service-keys.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Schoenmakerij Donders | Kies Vught of Den Bosch"
        description="Kies uw Schoenmakerij Donders vestiging in Vught of Den Bosch voor schoenreparatie, sleutelservice, tas reparatie, onderhoud en lederwaren."
      />
      <StructuredData data={getOrganizationSchema()} />
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-background py-14 lg:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 xl:gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Familiebedrijf sinds 2017</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-5">
                  Kies uw Schoenmakerij Donders vestiging
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  Vught en Den Bosch hebben ieder hun eigen diensten, openingstijden en adres. Kies de winkel die u wilt bezoeken,
                  dan ziet u meteen de juiste informatie.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <Link
                      key={location.id}
                      to={getLocationPath(location)}
                      className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div>
                          <p className="text-sm text-muted-foreground">Vestiging</p>
                          <h2 className="text-2xl font-bold text-foreground">{location.shortName}</h2>
                        </div>
                        <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary mt-0.5" />
                          <span>
                            {location.address.streetAddress}, {location.address.locality}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
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
                  <img src={heroCraftsman} alt="Ambachtelijk werk bij Schoenmakerij Donders" className="h-[28rem] w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/35">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ambacht, service en kwaliteit</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  De stijl blijft warm en persoonlijk: repareren wat waarde heeft, meedenken met de klant en duidelijk maken welke
                  vestiging het beste past bij uw bezoek.
                </p>
                <div className="rounded-lg bg-primary text-primary-foreground p-6">
                  <Quote className="h-8 w-8 mb-4 opacity-80" />
                  <p className="text-xl font-semibold leading-snug">“{BRAND_QUOTE}”</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {featuredServices.map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-lg border border-border bg-card p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-primary/10 p-2 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">{title}</h3>
                    </div>
                  </div>
                ))}
                <div className="rounded-lg overflow-hidden sm:col-span-2 grid sm:grid-cols-2">
                  <img src={serviceShoes} alt="Schoenreparatie" className="h-56 w-full object-cover" />
                  <img src={serviceKeys} alt="Sleutelservice" className="h-56 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Twee winkels, duidelijk gescheiden informatie</h2>
              <p className="text-muted-foreground text-lg">
                Gebruik de locatiepagina’s voor de meest actuele vestiging-specifieke diensten, openingstijden en route.
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
