import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, image }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 group border-border/50 hover:border-accent/30">
      {image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2.5 bg-accent/10 rounded-xl group-hover:bg-accent/15 transition-colors duration-300">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
