import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { CategoriesGrid } from "@/components/sections/categories-grid";
import { HighlightsSection } from "@/components/sections/highlights-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesGrid />
        <HighlightsSection />
      </main>
    </div>
  );
};

export default Index;
