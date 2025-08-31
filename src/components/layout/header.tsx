import { Search, Heart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export function Header() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CH</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">Cidade Hub</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Tudo que você precisa, no lugar certo
            </p>
          </div>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar estabelecimentos, serviços..."
              className="pl-10 search-input"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
                <Link to="/favorites">
                  <Heart className="w-4 h-4 mr-2" />
                  Favoritos
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/account">
                  <User className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{user?.name?.split(' ')[0] || 'Conta'}</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={logout} className="hidden sm:flex">
                <LogOut className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Criar conta</Link>
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Search Bar - Mobile */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar..."
            className="pl-10 search-input"
          />
        </div>
      </div>
    </header>
  );
}