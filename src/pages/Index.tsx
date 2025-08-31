import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { CategoriesGrid } from "@/components/sections/categories-grid";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { PromotionalGrid } from "@/components/sections/promotional-grid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesGrid />
        <PromotionalGrid />
        <HighlightsSection />
      </main>
    </div>
  );
};

export default Index;
