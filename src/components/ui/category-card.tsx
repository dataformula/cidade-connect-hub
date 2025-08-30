import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

export function CategoryCard({ icon, title, description, onClick, className }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "category-card group",
        "flex flex-col items-center text-center space-y-3",
        "min-h-[120px] justify-center",
        className
      )}
    >
      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-card-foreground text-sm mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}