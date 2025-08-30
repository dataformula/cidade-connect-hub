import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Phone } from "lucide-react";

const highlights = [
  {
    id: 1,
    name: "Restaurante do João",
    category: "Restaurantes",
    description: "Comida caseira e ambiente familiar no centro da cidade",
    rating: 4.8,
    distance: "0.5 km",
    isOpen: true,
    tags: ["Popular", "Delivery"],
    image: "🍽️"
  },
  {
    id: 2,
    name: "AutoCenter Silva",
    category: "Automotivo",
    description: "Oficina completa com 20 anos de experiência",
    rating: 4.9,
    distance: "1.2 km",
    isOpen: true,
    tags: ["Confiável", "Peças Originais"],
    image: "🚗"
  },
  {
    id: 3,
    name: "Casa Nova Imóveis",
    category: "Imóveis",
    description: "As melhores opções de casas e apartamentos",
    rating: 4.7,
    distance: "0.8 km",
    isOpen: true,
    tags: ["Novo", "Financiamento"],
    image: "🏠"
  }
];

export function HighlightsSection() {
  return (
    <section className="py-12 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Destaques da Cidade
          </h2>
          <p className="text-muted-foreground">
            Os estabelecimentos mais procurados e bem avaliados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((place, index) => (
            <Card 
              key={place.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-2">{place.image}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{place.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {place.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {place.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {place.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{place.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className={place.isOpen ? "text-success" : "text-destructive"}>
                      {place.isOpen ? "Aberto" : "Fechado"}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Phone className="w-4 h-4 mr-1" />
                    Ligar
                  </Button>
                  <Button size="sm" className="flex-1">
                    Ver Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Ver Todos os Destaques
          </Button>
        </div>
      </div>
    </section>
  );
}