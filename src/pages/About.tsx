import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Heart, Wrench, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-foreground">Over Ons</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vakmanschap en persoonlijke aandacht in het hart van 's-Hertogenbosch
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h2 className="text-3xl font-bold mb-4 text-primary">Onze Passie</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Schoenmakerij De Rompert is meer dan alleen een reparatiezaak. Het is een plek waar
                  vakmanschap en traditie samenkomen met moderne service. Al jarenlang zijn wij het
                  vertrouwde adres in 's-Hertogenbosch voor iedereen die waarde hecht aan kwaliteit en
                  persoonlijke aandacht.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Gelegen in de Rompertpassage in het hart van 's-Hertogenbosch, bieden wij een breed
                  scala aan diensten. Van vakkundige schoenreparatie tot sleutelservice en het herstellen
                  van lederwaren - elk item krijgt bij ons de zorg en aandacht die het verdient.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted/50 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Passie voor het vak</h3>
                  <p className="text-muted-foreground text-sm">
                    Elke reparatie wordt uitgevoerd met de grootste zorg en aandacht voor detail
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                    <Wrench className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Vakmanschap</h3>
                  <p className="text-muted-foreground text-sm">
                    Jarenlange ervaring en kennis van traditionele en moderne technieken
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                    <Users className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Persoonlijke service</h3>
                  <p className="text-muted-foreground text-sm">
                    Wij luisteren naar uw wensen en denken mee over de beste oplossing
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent via-accent/95 to-primary text-accent-foreground p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">Waarom klanten ons waarderen</h2>
                <p className="leading-relaxed mb-4 opacity-95">
                  Met een beoordeling van 4,5 sterren (32 reviews) zijn wij trots op het vertrouwen dat onze klanten
                  in ons stellen. Dit vertrouwen komt niet vanzelf - het is het resultaat van eerlijk
                  advies, vakkundig werk en het streven om elke klus perfect af te leveren.
                </p>
                <p className="leading-relaxed opacity-95">
                  Of u nu komt voor schoenreparatie, het bijmaken van sleutels of de
                  reparatie van lederwaren, bij Schoenmakerij De Rompert behandelen wij elk item met
                  respect en professionaliteit. Want wij begrijpen dat het vaak om
                  meer gaat dan alleen een reparatie - het gaat om uw favoriete schoenen, uw
                  vertrouwde tas, of de sleutel tot uw thuis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
