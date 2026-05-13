import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { getLocationPath, getMapsUrl, locations } from "@/data/locations";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact | Schoenmakerij Donders Vught en Den Bosch"
        description="Neem contact op met Schoenmakerij Donders in Vught of Den Bosch. Bekijk per vestiging het adres, telefoonnummer, openingstijden en de route."
        path="/contact"
      />
      <StructuredData data={getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <Navigation />
      <Breadcrumbs />

      <main className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">Contact per vestiging</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-foreground">Waar mogen we u helpen?</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kies de vestiging die u wilt bezoeken voor schoenreparatie, sleutelservice, tas reparatie, onderhoud of lederwaren. U
              ziet direct het juiste adres, telefoonnummer, de openingstijden en de route.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {locations.map((location) => (
              <section key={location.id} className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-2">{location.name}</h2>
                <p className="text-muted-foreground mb-6">{location.intro}</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-accent/10 p-3 text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                      <a href={getMapsUrl(location)} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                        {location.address.streetAddress}
                        <br />
                        {location.address.postalCode} {location.address.locality}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-accent/10 p-3 text-accent">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
                      <a href={`tel:${location.phoneHref}`} className="text-muted-foreground hover:text-accent">
                        {location.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-accent/10 p-3 text-accent">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-3">Openingstijden</h3>
                      <div className="space-y-2 text-sm">
                        {location.openingHours.map((row) => (
                          <div key={row.label} className="flex justify-between gap-4">
                            <span className="text-muted-foreground">{row.label}</span>
                            <span className="font-medium text-right text-foreground">{row.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <a href={getMapsUrl(location)} target="_blank" rel="noopener noreferrer">
                      Route
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to={getLocationPath(location)}>Bekijk vestiging</Link>
                  </Button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
