import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StructuredData } from "@/components/StructuredData";
import { faqs } from "@/data/faqs";
import { getBreadcrumbSchema, getFAQPageSchema } from "@/lib/structuredData";
import { getLocationPath, locations } from "@/data/locations";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Veelgestelde vragen | Schoenmakerij Donders Vught en Den Bosch"
        description="Antwoorden over schoenreparatie, sleutelservice, tas reparatie, DHL servicepoint en sneaker service bij Schoenmakerij Donders in Vught en Den Bosch."
        path="/veelgestelde-vragen"
      />
      <StructuredData
        data={[
          getBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Veelgestelde vragen", path: "/veelgestelde-vragen" }]),
          getFAQPageSchema(faqs),
        ]}
      />
      <Navigation />
      <Breadcrumbs />

      <main className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-foreground">Veelgestelde vragen</h1>
            <p className="text-lg text-muted-foreground">Korte antwoorden over onze vestigingen, diensten en praktische winkelinformatie.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 rounded-lg bg-muted/35 p-6 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">Kies direct een vestiging</h2>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {locations.map((location) => (
                  <Button key={location.id} asChild>
                    <Link to={getLocationPath(location)}>{location.shortName}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
