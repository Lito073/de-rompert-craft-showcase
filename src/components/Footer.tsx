import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import logo from "@/assets/donders-logo-brown.jpg";
import { getLocationPath, getMapsUrl, locations, SITE_NAME } from "@/data/locations";
import { ReactNode } from "react";
import SectionWave from "@/components/SectionWave";

type FooterWaveTone = "background" | "muted" | "primary" | "secondary" | "accent" | "card";

interface FooterProps {
  children?: ReactNode;
  waveTone?: FooterWaveTone;
}

const Footer = ({ children, waveTone = "background" }: FooterProps) => {
  return (
    <footer className="bg-[hsl(var(--craft-brown))] text-primary-foreground relative overflow-hidden">
      {children ?? <SectionWave tone={waveTone} variant="footer" className="h-20 md:h-24 lg:h-28" />}
      <div className="container mx-auto pt-28 pb-12 relative z-10 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16">
          <div>
            <div className="mb-5 flex justify-center lg:justify-start">
              <img
                src={logo}
                alt="Schoenmakerij Donders logo"
                className="h-auto w-full max-w-[17rem] sm:max-w-[19rem] lg:max-w-[21rem]"
              />
              <h2 className="sr-only">{SITE_NAME}</h2>
            </div>
            <p className="text-sm opacity-90 max-w-md text-center lg:text-left">
              Familiebedrijf voor schoenreparatie, sleutelservice, tas reparatie, onderhoud en lederwaren in Vught en Den Bosch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div key={location.id}>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--warm-amber))]">{location.shortName}</h3>
                <div className="space-y-3 text-sm opacity-90">
                  <a href={getMapsUrl(location)} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-[hsl(var(--warm-amber))]">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-[hsl(var(--warm-amber))]" />
                    <span>
                      {location.address.streetAddress}
                      <br />
                      {location.address.postalCode} {location.address.locality}
                    </span>
                  </a>
                  <a href={`tel:${location.phoneHref}`} className="flex items-center gap-2 hover:text-[hsl(var(--warm-amber))]">
                    <Phone className="h-5 w-5 flex-shrink-0 text-[hsl(var(--warm-amber))]" />
                    {location.phoneDisplay}
                  </a>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-[hsl(var(--warm-amber))]" />
                    <div>
                      {location.openingHours.map((row) => (
                        <div key={row.label} className="flex justify-between gap-3">
                          <span>{row.label}</span>
                          <span>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to={getLocationPath(location)} className="inline-block font-semibold text-[hsl(var(--warm-amber))] underline-offset-4 hover:underline">
                    Bekijk vestiging
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-accent/25 mt-10 pt-6 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
