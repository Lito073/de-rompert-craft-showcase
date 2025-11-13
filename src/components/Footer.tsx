import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.avif";
import { ReactNode } from "react";

interface FooterProps {
  children?: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {children}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" style={{ zIndex: 0 }} />
      <div className="container mx-auto pt-32 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="De Rompert Logo" className="h-10 w-auto brightness-0 invert" />
              <h3 className="text-xl font-bold">Schoenmakerij De Rompert</h3>
            </div>
            <p className="text-sm opacity-90">
              Uw specialist voor vakkundige schoenreparatie, sleutelservice en meer in 's-Hertogenbosch.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ 4,5
              </div>
              <span className="text-sm opacity-90">(32 reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Openingstijden
            </h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex justify-between">
                <span>Maandag:</span>
                <span>12:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Dinsdag - Donderdag:</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Vrijdag:</span>
                <span>09:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Zaterdag:</span>
                <span>09:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Zondag:</span>
                <span>Gesloten</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:+31736425737" className="hover:text-primary-foreground transition-colors">
                  073 642 5737
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=Rompertpassage+39+5233+AP+s-Hertogenbosch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Rompertpassage 39<br />
                  5233 AP 's-Hertogenbosch
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Schoenmakerij De Rompert. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
