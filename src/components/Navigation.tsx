import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getLocationPath, locations } from "@/data/locations";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logoAvif from "@/assets/donders-wordmark.avif";
import logo from "@/assets/donders-wordmark.jpg";
import logoWebp from "@/assets/donders-wordmark.webp";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Over ons", path: "/over-ons" },
  { name: "Veelgestelde vragen", path: "/veelgestelde-vragen" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/92 border-b border-border/60 sticky top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-card/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[4.5rem]">
          <Link
            to="/"
            className="flex items-center rounded-md bg-[hsl(var(--craft-brown))] px-2 py-1.5 shadow-sm transition-shadow hover:shadow-md"
            aria-label="Schoenmakerij Donders home"
          >
            <picture>
              <source srcSet={logoAvif} type="image/avif" />
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logo}
                alt="Schoenmakerij Donders logo"
                width={900}
                height={229}
                decoding="async"
                className="h-10 w-auto max-w-[10.5rem] object-contain md:max-w-[12rem]"
              />
            </picture>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button key={item.path} asChild variant={isActive(item.path) ? "default" : "ghost"}>
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            {locations.map((shopLocation) => (
              <Button
                key={shopLocation.id}
                asChild
                size="sm"
                variant={isActive(getLocationPath(shopLocation)) ? "default" : "outline"}
              >
                <Link to={getLocationPath(shopLocation)}>
                  <MapPin className="h-4 w-4" />
                  {shopLocation.shortName}
                </Link>
              </Button>
            ))}
          </div>

          <button
            className="md:hidden rounded-md p-2 text-primary hover:bg-accent/10"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Navigatie openen of sluiten"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {[...navItems, ...locations.map((shopLocation) => ({ name: shopLocation.shortName, path: getLocationPath(shopLocation) }))].map((item) => (
              <Button key={item.path} asChild variant={isActive(item.path) ? "default" : "ghost"} className="w-full justify-start">
                <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
