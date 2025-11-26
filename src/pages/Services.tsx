import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Key, ShoppingBag, Package } from "lucide-react";
import shoeImage from "@/assets/service-shoes.jpg";
import keyImage from "@/assets/service-keys.jpg";
import bagImage from "@/assets/service-bags.jpg";
import dhlImage from "@/assets/service-dhl.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Schoenreparatie",
      image: shoeImage,
      description:
        "Wij bieden vakkundige reparatie van al uw schoeisel. Of het nu gaat om nieuwe hakken, zolen, ritsen of andere reparaties - onze ervaren schoenmakers zorgen ervoor dat uw schoenen er weer als nieuw uitzien. Wij werken met hoogwaardige materialen en klassieke technieken voor een duurzaam resultaat.",
    },
    {
      icon: Key,
      title: "Sleutelservice",
      image: keyImage,
      description:
        "Sleutels bijmaken en dupliceren terwijl u wacht. Wij kunnen vrijwel alle soorten sleutels namaken, van gewone huissleutels tot speciale veiligheidssleutels. Snel, nauwkeurig en tegen een scherpe prijs. Ook voor ingewikkeldere sleutels kunt u bij ons terecht.",
    },
    {
      icon: ShoppingBag,
      title: "Tassenreparatie",
      image: bagImage,
      description:
        "Heeft uw favoriete tas of koffer reparatie nodig? Wij repareren tassen, koffers, riemen en andere lederwaren vakkundig. Van het vervangen van ritsen en gespen tot het herstellen van scheuren in leer - wij geven uw spullen graag een tweede leven.",
    },
    {
      icon: Package,
      title: "DHL Pakketservice",
      image: dhlImage,
      description:
        "Als DHL ServicePoint kunt u bij ons gemakkelijk pakketten verzenden en ophalen. U kunt uw pakketten hier afgeven voor verzending of de pakketten ophalen die voor u klaarliggen. Handig gecombineerd met een bezoek aan onze andere diensten.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Onze Diensten</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bij Schoenmakerij De Rompert bent u aan het juiste adres voor professionele
              reparatiediensten en meer. Ontdek ons complete aanbod.
            </p>
            <div className="mt-8 inline-flex items-center space-x-3 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-3xl font-bold text-primary">4,5 ★</span>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">32 reviews</div>
                <div className="text-xs text-muted-foreground">Tevreden klanten</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>

          <div className="mt-16 bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto border border-border/50">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Openingstijden</h2>
            <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border/50">
                <span className="font-medium">Maandag</span>
                <span className="text-muted-foreground">12:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border/50">
                <span className="font-medium">Dinsdag - Donderdag</span>
                <span className="text-muted-foreground">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border/50">
                <span className="font-medium">Vrijdag</span>
                <span className="text-accent font-semibold">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border/50">
                <span className="font-medium">Zaterdag</span>
                <span className="text-muted-foreground">09:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border/50 md:col-span-2">
                <span className="font-medium">Zondag</span>
                <span className="text-muted-foreground">Gesloten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer>
        <svg className="absolute top-0 left-0 w-full h-24" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,64 C160,100 320,100 480,64 C640,28 800,28 960,64 C1120,100 1280,100 1440,64 L1440,0 Z" fill="hsl(var(--background))"/>
        </svg>
      </Footer>
    </div>
  );
};

export default Services;
