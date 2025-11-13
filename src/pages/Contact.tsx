import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Vul alle verplichte velden in",
        description: "Naam, e-mail en bericht zijn verplicht.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Bericht verzonden!",
        description: "Wij nemen zo spoedig mogelijk contact met u op.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Contact</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heeft u vragen of wilt u een offerte aanvragen? Neem gerust contact met ons op.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Contactgegevens</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Telefoon</h3>
                      <a href="tel:+31736425737" className="text-muted-foreground hover:text-primary transition-colors">
                        073 642 5737
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Adres</h3>
                      <a 
                        href="https://maps.google.com/?q=Rompertpassage+39+5233+AP+s-Hertogenbosch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Rompertpassage 39<br />
                        5233 AP 's-Hertogenbosch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-3 text-foreground">Openingstijden</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Maandag:</span>
                          <span className="font-medium">12:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Di - Do:</span>
                          <span className="font-medium">09:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Vrijdag:</span>
                          <span className="text-accent font-semibold">09:00 - 20:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Zaterdag:</span>
                          <span className="font-medium">09:00 - 17:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Zondag:</span>
                          <span className="font-medium">Gesloten</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-muted rounded-xl overflow-hidden h-64 border border-border/50 shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=Rompertpassage+39,+5233+AP+'s-Hertogenbosch&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie Schoenmakerij De Rompert"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Stuur ons een bericht</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Naam *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Uw naam"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="uw@email.nl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 12345678"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Uw bericht *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Vertel ons waarmee wij u kunnen helpen..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Verzenden..." : "Verzenden"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Verplichte velden
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
