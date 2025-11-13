import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-4xl font-bold mb-4 text-foreground">Pagina niet gevonden</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Sorry, de pagina die u zoekt bestaat niet of is verplaatst.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="w-full sm:w-auto">
                  <Home className="mr-2 h-5 w-5" />
                  Terug naar Home
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Ga terug
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-1">Home</h3>
                <p className="text-sm text-muted-foreground">Terug naar hoofdpagina</p>
              </Link>
              <Link to="/diensten" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-1">Diensten</h3>
                <p className="text-sm text-muted-foreground">Bekijk onze diensten</p>
              </Link>
              <Link to="/veelgestelde-vragen" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-1">Vragen</h3>
                <p className="text-sm text-muted-foreground">Veelgestelde vragen</p>
              </Link>
              <Link to="/contact" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                <p className="text-sm text-muted-foreground">Neem contact op</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
