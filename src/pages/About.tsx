import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { BRAND_QUOTE, getLocationPath, locations } from "@/data/locations";
import { Heart, Quote, ShieldCheck, Users, Wrench } from "lucide-react";

const values = [
  {
    title: "Klantvriendelijkheid",
    description: "Een persoonlijke benadering en helder advies per klant en per reparatie.",
    icon: Heart,
  },
  {
    title: "Service",
    description: "Meedenken, praktisch helpen en duidelijk maken wat bij welke vestiging mogelijk is.",
    icon: Users,
  },
  {
    title: "Kwaliteit",
    description: "Ambachtelijk werk met zorg voor materialen, afwerking en dagelijks gebruik.",
    icon: ShieldCheck,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Over ons | Familiebedrijf Schoenmakerij Donders"
        description="Schoenmakerij Donders is een familiebedrijf sinds 2017 met vestigingen in Vught en Den Bosch. Lees over klantvriendelijkheid, service en degelijk vakwerk."
        path="/over-ons"
      />
      <StructuredData data={getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Over ons", path: "/over-ons" }])} />
      <Navigation />
      <Breadcrumbs />

      <main>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Familiebedrijf sinds 2017</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 text-foreground">Over Schoenmakerij Donders</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Schoenmakerij Donders is een familiebedrijf sinds 2017. Wat begon in Vught is uitgebreid naar Den Bosch, met dezelfde
                aandacht voor klantvriendelijkheid, service en degelijk vakwerk.
              </p>
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start mb-14">
              <div className="rounded-lg bg-primary text-primary-foreground p-8">
                <Quote className="h-10 w-10 mb-5 opacity-80" />
                <p className="text-2xl md:text-3xl font-semibold leading-snug">"{BRAND_QUOTE}"</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Van Vught naar Den Bosch</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Schoenmakerij Donders is een familiebedrijf sinds 2017. De eerste vestiging opende in Vught en wordt gerund door
                    Corne en Linda.
                  </p>
                  <p>
                    Vanaf 2025 is er een filiaal bij in Den Bosch. Deze vestiging wordt gerund door Jimmy, de zoon van Corne.
                    Beide winkels hebben hun eigen diensten en locatiegegevens, maar delen dezelfde aandacht voor mensen, service en
                    degelijk vakwerk.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-14">
              {values.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <section className="rounded-lg bg-muted/35 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="h-7 w-7 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">Onze vestigingen</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {locations.map((location) => (
                  <div key={location.id} className="rounded-lg border border-border bg-card p-5">
                    <h3 className="text-xl font-bold text-foreground mb-2">{location.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {location.address.streetAddress}, {location.address.postalCode} {location.address.locality}
                    </p>
                    <Button asChild variant="outline">
                      <Link to={getLocationPath(location)}>Bekijk {location.shortName}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
