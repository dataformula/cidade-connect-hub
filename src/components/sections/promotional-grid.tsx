import { MarketingBanner } from "./marketing-banner";

export function PromotionalGrid() {
  return (
    <section className="py-8 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Ofertas Especiais
          </h2>
          <span className="text-sm text-muted-foreground">
            Patrocinado
          </span>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MarketingBanner type="promotion" />
          <MarketingBanner type="featured" />
          <MarketingBanner type="premium" />
        </div>
      </div>
    </section>
  );
}