import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { getLocationPath, locations } from "@/data/locations";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Services = () => {
  const allServiceTitles = Array.from(new Set(locations.flatMap((location) => location.services.map((service) => service.title))));

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Diensten | Schoenreparatie, sleutels en lederwaren"
        description="Bekijk per vestiging de diensten van Schoenmakerij Donders: schoenreparatie, sleutelservice, tas reparatie, onderhoud, sneaker service, DHL servicepoint en lederwaren."
        path="/diensten"
      />
      <StructuredData data={getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Diensten", path: "/diensten" }])} />
      <Navigation />
      <Breadcrumbs />

      <main className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Diensten per vestiging</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-foreground">Wat kunnen wij voor u doen?</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Niet elke vestiging biedt precies dezelfde services. Bekijk per winkel waar u terecht kunt voor schoenreparatie,
              sleutels, tassen, onderhoud, sneaker service, lederwaren of DHL-pakketten.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-14">
            {locations.map((location) => (
              <section key={location.id} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{location.name}</h2>
                    <p className="text-muted-foreground">
                      {location.address.streetAddress}, {location.address.locality}
                    </p>
                  </div>
                  <Button asChild variant="outline">
                    <Link to={getLocationPath(location)}>
                      Bekijk locatie
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {location.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.title} className="flex items-start gap-3 rounded-md bg-muted/50 p-3">
                        <Icon className="h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-foreground">{service.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <section className="rounded-lg bg-muted/35 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-5">Alle diensten in een oogopslag</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allServiceTitles.map((title) => (
                <div key={title} className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
