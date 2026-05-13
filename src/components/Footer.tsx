import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.avif";
import { getLocationPath, getMapsUrl, locations, SITE_NAME } from "@/data/locations";
import { ReactNode } from "react";

interface FooterProps {
  children?: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {children}
      <div className="container mx-auto py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Schoenmakerij Donders logo" className="h-10 w-auto brightness-0 invert" />
              <h2 className="text-xl font-bold">{SITE_NAME}</h2>
            </div>
            <p className="text-sm opacity-90 max-w-md">
              Familiebedrijf voor schoenreparatie, sleutelservice, tas reparatie, onderhoud en lederwaren in Vught en Den Bosch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div key={location.id}>
                <h3 className="text-lg font-semibold mb-3">{location.shortName}</h3>
                <div className="space-y-3 text-sm opacity-90">
                  <a href={getMapsUrl(location)} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:opacity-80">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>
                      {location.address.streetAddress}
                      <br />
                      {location.address.postalCode} {location.address.locality}
                    </span>
                  </a>
                  <a href={`tel:${location.phoneHref}`} className="flex items-center gap-2 hover:opacity-80">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    {location.phoneDisplay}
                  </a>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      {location.openingHours.map((row) => (
                        <div key={row.label} className="flex justify-between gap-3">
                          <span>{row.label}</span>
                          <span>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to={getLocationPath(location)} className="inline-block font-semibold underline-offset-4 hover:underline">
                    Bekijk vestiging
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
