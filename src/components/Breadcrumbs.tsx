import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    "diensten": "Diensten",
    "over-ons": "Over ons",
    "veelgestelde-vragen": "Veelgestelde vragen",
    "contact": "Contact",
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="container mx-auto py-4 px-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-primary transition-colors flex items-center">
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const breadcrumbName = breadcrumbNameMap[name] || name;

          return (
            <li key={name} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="font-medium text-foreground">{breadcrumbName}</span>
              ) : (
                <Link to={routeTo} className="hover:text-primary transition-colors">
                  {breadcrumbName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
