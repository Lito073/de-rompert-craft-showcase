import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Key, ShoppingBag, Package, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-craftsman.jpg";

const Index = () => {
  const highlights = [
    { icon: Award, text: "9,5 klantbeoordeling" },
    { icon: Clock, text: "Snel en vakkundig" },
  ];

  const services = [
    {
      icon: Scissors,
      title: "Schoenreparatie",
      description: "Vakkundige reparatie van al uw schoeisel door ervaren schoenmakers.",
    },
    {
      icon: Key,
      title: "Sleutelservice",
      description: "Sleutels bijmaken en dupliceren terwijl u wacht.",
    },
    {
      icon: ShoppingBag,
      title: "Tassenreparatie",
      description: "Professioneel herstel van tassen, koffers en lederwaren.",
    },
    {
      icon: Package,
      title: "DHL Pakketservice",
      description: "Gemakkelijk pakketten verzenden en ontvangen bij ons servicepunt.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Schoenmakerij De Rompert
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-light">
            Vakmanschap en persoonlijke service sinds jaar en dag
          </p>
          <p className="text-lg mb-8 max-w-xl mx-auto opacity-95">
            Uw betrouwbare specialist in 's-Hertogenbosch voor schoenreparatie, sleutelservice en meer
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/diensten">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Onze Diensten
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Onze Diensten</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vakkundige service met aandacht voor detail en kwaliteit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/diensten">
              <Button size="lg" className="text-lg">
                Alle diensten bekijken
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
              Waarom kiezen voor De Rompert?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Vakmanschap</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Met jarenlange ervaring en vakkennis repareren wij uw schoenen, tassen en maken wij
                  sleutels bij met de grootste zorg en precisie.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Persoonlijke Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bij ons staat u centraal. Wij luisteren naar uw wensen en adviseren u persoonlijk
                  over de beste oplossing voor uw reparatie.
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

export default Index;
