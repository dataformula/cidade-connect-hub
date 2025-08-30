import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Star, Clock, MapPin } from "lucide-react";
import { useState } from "react";

interface MarketingBannerProps {
  type?: 'promotion' | 'featured' | 'premium';
  className?: string;
}

export function MarketingBanner({ type = 'promotion', className }: MarketingBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const bannerContent = {
    promotion: {
      title: "🔥 Oferta Especial!",
      subtitle: "Pizzaria Bella Vista",
      description: "2 pizzas grandes por apenas R$ 59,90",
      badge: "Promoção",
      badgeVariant: "destructive" as const,
      action: "Ver Oferta",
      accent: "Válido até domingo!"
    },
    featured: {
      title: "⭐ Destaque da Semana",
      subtitle: "Auto Center Premium",
      description: "Revisão completa com 50% de desconto",
      badge: "Destaque",
      badgeVariant: "default" as const,
      action: "Agendar",
      accent: "Mais de 1000 avaliações positivas"
    },
    premium: {
      title: "💎 Anúncio Premium",
      subtitle: "Imobiliária Centro",
      description: "Apartamento 3 quartos - Centro",
      badge: "Premium",
      badgeVariant: "secondary" as const,
      action: "Ver Imóvel",
      accent: "R$ 350.000 - Financiamento disponível"
    }
  };

  const content = bannerContent[type];

  return (
    <Card className={`relative overflow-hidden border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <CardContent className="p-4">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-6 w-6 p-0"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
        </Button>

        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xl">
              {type === 'promotion' ? '🔥' : type === 'featured' ? '⭐' : '💎'}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant={content.badgeVariant} className="text-xs">
                {content.badge}
              </Badge>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>4.8</span>
              </div>
            </div>

            <h3 className="font-bold text-lg text-foreground mb-1">
              {content.title}
            </h3>
            <h4 className="font-semibold text-primary mb-2">
              {content.subtitle}
            </h4>
            <p className="text-sm text-foreground mb-2">
              {content.description}
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              {content.accent}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>2.1 km</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Aberto</span>
                </div>
              </div>
              <Button size="sm" className="text-xs px-3 py-1">
                {content.action}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}