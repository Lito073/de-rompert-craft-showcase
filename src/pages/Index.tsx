import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Key, ShoppingBag, Package, Award, Clock, Hammer, Euro, Handshake, ArrowRight, MapPin } from "lucide-react";
import serviceShoes from "@/assets/service-shoes.jpg";
import serviceKeys from "@/assets/service-keys.jpg";
import serviceBags from "@/assets/service-bags.jpg";
import heroCraftsman from "@/assets/hero-craftsman.jpg";
import keyMaking1 from "@/assets/key-making-1.jpg";
import keyMaking2 from "@/assets/key-making-2.jpg";

const Index = () => {
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
      <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 2xl:gap-24 items-center max-h-[calc(100vh-5rem)]">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                <span>4,5 ★ (32 reviews)</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Vakmanschap met
                <span className="text-primary"> passie</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Uw betrouwbare specialist in 's-Hertogenbosch voor schoenreparatie, sleutelservice en meer. Kwaliteit en persoonlijke service staan bij ons voorop.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link to="/diensten" className="w-full sm:w-auto">
                  <Button size="lg" className="text-base px-7 h-12 group w-full sm:w-auto">
                    Onze Diensten
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="text-base px-7 h-12 w-full sm:w-auto">
                    Neem Contact Op
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 pt-1">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Snelle service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Hammer className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Vakkundig werk</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20 max-h-[500px]">
                  <img 
                    src={heroCraftsman} 
                    alt="Vakmanschap bij Schoenmakerij De Rompert" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Experience Badge Sticker */}
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl shadow-2xl p-5 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-0.5">4,5★</div>
                    <div className="text-xs font-medium opacity-90">Top Beoordeeld</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/50 relative">
        {/* Wave from Hero */}
        <svg className="absolute top-0 left-0 w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L0 17L60 25.8C120 34.7 240 52.3 360 52.3C480 52.3 600 34.7 720 25.8C840 17 960 17 1080 21.5C1200 26 1320 34.7 1380 38.8L1440 43V0Z" fill="hsl(var(--background))"/>
        </svg>
        <div className="container mx-auto">
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
      <section className="py-16 bg-muted/20 relative">
        {/* Wave from Services */}
        <svg className="absolute top-0 left-0 w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,43 C240,17 480,17 720,43 C960,69 1200,69 1440,43 L1440,0 Z" fill="hsl(var(--muted) / 0.3)"/>
        </svg>
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Waarom Kiezen Voor Schoenmakerij De Rompert?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 2xl:gap-24 items-center">
              {/* Image Grid with Rating Overlay */}
              <div className="relative lg:pr-8">
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="overflow-hidden rounded-lg h-40 lg:h-48">
                      <img 
                        src={serviceKeys} 
                        alt="Sleutelservice" 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg h-52 lg:h-64">
                      <img 
                        src={serviceShoes} 
                        alt="Schoenreparatie handwerk" 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 lg:space-y-4 pt-6 lg:pt-8">
                    <div className="overflow-hidden rounded-lg h-52 lg:h-64">
                      <img 
                        src={keyMaking1} 
                        alt="Sleutels maken" 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg h-40 lg:h-48">
                      <img 
                        src={keyMaking2} 
                        alt="Vakmanschap sleutelservice" 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Rating Card Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-border">
                  <div className="text-6xl font-bold text-primary mb-2">4,5</div>
                  <div className="flex justify-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-2xl text-primary">★</span>
                      ))}
                      <span className="text-2xl text-primary/50">★</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">32 reviews</div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  In het hart van 's-Hertogenbosch bij de Rompertpassage, staan wij voor kwaliteit en persoonlijke service. Elk item krijgt de aandacht die het verdient.
                </p>
                
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Hammer className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1.5 text-foreground">Vakmanschap van Generaties</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Traditionele technieken gecombineerd met moderne apparatuur voor het beste resultaat.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1.5 text-foreground">Snelle Service</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Veel reparaties kunnen terwijl u wacht worden uitgevoerd. Uw tijd is waardevol.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Handshake className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1.5 text-foreground">Persoonlijke Benadering</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We kennen onze klanten en hun wensen. Bij ons bent u geen nummer maar een gewaardeerde bezoeker.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Euro className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1.5 text-foreground">Eerlijke Prijzen</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Transparante prijzen zonder verborgen kosten. U krijgt altijd vooraf een duidelijke offerte.
                      </p>
                    </div>
                  </div>
                </div>

                <Link to="/over-ons" className="inline-flex items-center text-primary hover:underline font-medium mt-4 group">
                  Lees meer over ons 
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Visit Us */}
      <section className="py-20 bg-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kom Langs in Onze Winkel</h2>
            <p className="text-xl opacity-95">
              Midden in het centrum van 's-Hertogenbosch bij de Rompertpassage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Opening Hours Card */}
            <div className="bg-background/95 backdrop-blur-sm text-foreground rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-bold">Openingstijden</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium">Maandag</span>
                  <span className="text-muted-foreground">12:00 - 18:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium">Dinsdag - Donderdag</span>
                  <span className="text-muted-foreground">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium">Vrijdag</span>
                  <span className="text-accent font-semibold">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="font-medium">Zaterdag</span>
                  <span className="text-muted-foreground">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Zondag</span>
                  <span className="text-muted-foreground">Gesloten</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-background/95 backdrop-blur-sm text-foreground rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-bold">Bezoek Ons</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Adres</p>
                  <a 
                    href="https://maps.google.com/?q=Rompertpassage+39+5233+AP+s-Hertogenbosch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors block text-base"
                  >
                    Rompertpassage 39<br />
                    5233 AP 's-Hertogenbosch
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Telefoon</p>
                  <a 
                    href="tel:+31736425737" 
                    className="text-accent hover:text-accent/80 transition-colors text-lg font-semibold block"
                  >
                    073 642 5737
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Bereikbaar tijdens openingstijden</p>
                </div>
                <Link to="/contact" className="block">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Route & Parkeren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer>
        {/* Wave from CTA section */}
        <svg className="absolute top-0 left-0 w-full h-24" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,64 C160,100 320,100 480,64 C640,28 800,28 960,64 C1120,100 1280,100 1440,64 L1440,0 Z" fill="hsl(var(--accent))"/>
        </svg>
      </Footer>
    </div>
  );
};

export default Index;
