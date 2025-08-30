import { Button } from "@/components/ui/button";
import { MapPin, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="relative container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">CH</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Cidade Hub
              </h1>
              <p className="text-lg text-muted-foreground">
                Tudo que você precisa, no lugar certo
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-surface-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Conecte-se com os melhores estabelecimentos, serviços e oportunidades da sua cidade. 
            Simples, rápido e sempre atualizado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-primary min-w-[200px]">
              <Sparkles className="w-5 h-5 mr-2" />
              Explorar Categorias
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              <MapPin className="w-5 h-5 mr-2" />
              Minha Localização
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Estabelecimentos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Sempre Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}