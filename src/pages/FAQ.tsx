import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Hoe lang duurt een schoenreparatie?",
      answer: "De meeste reparaties kunnen binnen 1-2 werkdagen worden uitgevoerd. Voor eenvoudige reparaties zoals nieuwe hakken of zolen kunt u vaak terwijl u wacht worden geholpen. Voor complexere reparaties vragen wij u om uw schoenen achter te laten."
    },
    {
      question: "Kunnen jullie alle soorten sleutels bijmaken?",
      answer: "Wij kunnen vrijwel alle soorten sleutels namaken, van gewone huissleutels tot speciale veiligheidssleutels. In de meeste gevallen kunnen wij dit terwijl u wacht doen. Voor zeer specifieke sleutels vragen wij u om contact met ons op te nemen."
    },
    {
      question: "Wat zijn de kosten voor schoenreparatie?",
      answer: "De kosten variëren afhankelijk van het type reparatie. Nieuwe hakken beginnen vanaf €15, nieuwe zolen vanaf €25. Voor een exacte prijsopgave kunt u uw schoenen bij ons langsbrengen of bellen naar 073 642 5737."
    },
    {
      question: "Repareren jullie ook designertassen?",
      answer: "Ja, wij hebben ervaring met het repareren van hoogwaardige designertassen en lederwaren. Wij behandelen elk item met de grootste zorg en gebruiken kwalitatieve materialen die passen bij uw tas."
    },
    {
      question: "Moet ik een afspraak maken?",
      answer: "Voor de meeste diensten is geen afspraak nodig. U kunt gewoon tijdens openingstijden langskomen. Voor complexere reparaties of als u zeker wilt zijn van directe service, kunt u ons van tevoren bellen."
    },
    {
      question: "Hoe werkt de DHL pakketservice?",
      answer: "Als DHL ServicePoint kunt u bij ons pakketten afgeven voor verzending en pakketten ophalen die voor u klaarliggen. U heeft hiervoor uw track & trace code of barcode nodig. Wij zijn geopend tijdens reguliere openingstijden."
    },
    {
      question: "Bieden jullie garantie op reparaties?",
      answer: "Ja, wij staan achter ons vakmanschap. Op alle reparaties geven wij garantie. Mocht er binnen een redelijke termijn iets mis gaan met de reparatie, dan maken wij dit kosteloos in orde."
    },
    {
      question: "Kan ik betalen met pin?",
      answer: "Ja, u kunt bij ons zowel contant als met pin betalen. Wij accepteren alle gangbare betaalmethoden."
    },
    {
      question: "Waar kan ik parkeren?",
      answer: "De Rompertpassage ligt in het centrum van 's-Hertogenbosch. Er zijn diverse parkeergarages in de buurt, zoals de Arena Parkeergarage en Parkeergarage Wolvenhoek. Ook zijn er parkeermogelijkheden op straat (betaald parkeren)."
    },
    {
      question: "Zijn jullie ook open op feestdagen?",
      answer: "Op de meeste feestdagen zijn wij gesloten. Voor specifieke openingstijden tijdens feestdagen kunt u ons bellen of onze website raadplegen waar wij actuele informatie plaatsen."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Veelgestelde Vragen</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heeft u een vraag? Bekijk hieronder de antwoorden op de meest gestelde vragen.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Staat uw vraag er niet bij?</h3>
              <p className="text-muted-foreground mb-6">
                Neem gerust contact met ons op. Wij helpen u graag verder!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+31736425737"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Bel ons: 073 642 5737
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  Contactformulier
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
