import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Schoenmakerij De Rompert</h3>
            <p className="text-sm opacity-90">
              Uw specialist voor vakkundige schoenreparatie, sleutelservice en meer in 's-Hertogenbosch.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ 9,5
              </div>
              <span className="text-sm opacity-90">Klantbeoordeling</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Openingstijden
            </h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex justify-between">
                <span>Maandag - Vrijdag:</span>
                <span>9:00 - 17:30</span>
              </div>
              <div className="flex justify-between">
                <span>Zaterdag:</span>
                <span>9:00 - 17:00</span>
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
                <span>073 - 123 4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  Hinthamerstraat 123<br />
                  5211 MV 's-Hertogenbosch
                </span>
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
