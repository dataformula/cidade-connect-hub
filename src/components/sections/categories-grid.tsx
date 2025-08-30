import { CategoryCard } from "@/components/ui/category-card";
import { 
  UtensilsCrossed, 
  Truck, 
  Car, 
  Hammer, 
  ShoppingBag, 
  Home, 
  Church, 
  Wrench, 
  Wifi, 
  GraduationCap, 
  PartyPopper, 
  Lightbulb,
  Calendar
} from "lucide-react";

const categories = [
  {
    id: "restaurants",
    title: "Restaurantes",
    icon: <UtensilsCrossed className="text-orange-500" />,
    description: "Bares e restaurantes"
  },
  {
    id: "delivery",
    title: "Delivery",
    icon: <Truck className="text-green-500" />,
    description: "Comida em casa"
  },
  {
    id: "automotive",
    title: "Automotivo",
    icon: <Car className="text-blue-500" />,
    description: "Carros e motos"
  },
  {
    id: "construction",
    title: "Construção",
    icon: <Hammer className="text-yellow-600" />,
    description: "Material e serviços"
  },
  {
    id: "variety",
    title: "Variedades",
    icon: <ShoppingBag className="text-purple-500" />,
    description: "Compras diversas"
  },
  {
    id: "real-estate",
    title: "Imóveis",
    icon: <Home className="text-red-500" />,
    description: "Venda e aluguel"
  },
  {
    id: "churches",
    title: "Igrejas",
    icon: <Church className="text-amber-600" />,
    description: "Comunidades religiosas"
  },
  {
    id: "services",
    title: "Serviços Gerais",
    icon: <Wrench className="text-gray-600" />,
    description: "Profissionais locais"
  },
  {
    id: "internet",
    title: "Internet",
    icon: <Wifi className="text-cyan-500" />,
    description: "Provedores e TI"
  },
  {
    id: "education",
    title: "Escolas",
    icon: <GraduationCap className="text-indigo-500" />,
    description: "Educação e cursos"
  },
  {
    id: "entertainment",
    title: "Lazer",
    icon: <PartyPopper className="text-pink-500" />,
    description: "Diversão e cultura"
  },
  {
    id: "utilities",
    title: "Utilidades",
    icon: <Lightbulb className="text-yellow-500" />,
    description: "Casa e jardim"
  },
  {
    id: "events",
    title: "Eventos",
    icon: <Calendar className="text-violet-500" />,
    description: "Festas e celebrações"
  }
];

export function CategoriesGrid() {
  const handleCategoryClick = (categoryId: string) => {
    console.log("Category clicked:", categoryId);
    // Navigation logic will be implemented later
  };

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            O que você está procurando?
          </h2>
          <p className="text-muted-foreground">
            Encontre tudo que precisa na sua cidade
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard
                icon={category.icon}
                title={category.title}
                description={category.description}
                onClick={() => handleCategoryClick(category.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}