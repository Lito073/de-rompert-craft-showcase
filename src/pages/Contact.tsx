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
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container mx-auto px-4">
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
                    <div className="p-3 bg-primary rounded-lg">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Telefoon</h3>
                      <a href="tel:0731234567" className="text-muted-foreground hover:text-primary transition-colors">
                        073 - 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary rounded-lg">
                      <Mail className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">E-mail</h3>
                      <a
                        href="mailto:info@derompert.nl"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@derompert.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Adres</h3>
                      <p className="text-muted-foreground">
                        Hinthamerstraat 123<br />
                        5211 MV 's-Hertogenbosch
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <Clock className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-3 text-foreground">Openingstijden</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Maandag - Vrijdag:</span>
                          <span className="font-medium">9:00 - 17:30</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Zaterdag:</span>
                          <span className="font-medium">9:00 - 17:00</span>
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
              <div className="bg-muted rounded-lg overflow-hidden h-64 border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.123456789!2d5.3047!3d51.6909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee7ed6b06b7b%3A0x123456789abcdef!2sHinthamerstraat%20123%2C%205211%20MV%20's-Hertogenbosch!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
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

                <Button type="submit" className="w-full" size="lg">
                  Verzenden
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
