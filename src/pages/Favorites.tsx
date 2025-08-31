import { Heart, MapPin, Star, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/header';

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center max-w-md mx-auto">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Faça login para ver seus favoritos</h1>
            <p className="text-muted-foreground mb-6">
              Entre na sua conta para salvar e acessar seus estabelecimentos favoritos
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/signup">Criar conta</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <Heart className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Meus Favoritos</h1>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
              {favorites.length}
            </span>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Nenhum favorito ainda</h2>
              <p className="text-muted-foreground mb-6">
                Comece a explorar e salve seus estabelecimentos favoritos
              </p>
              <Button asChild>
                <Link to="/">Explorar estabelecimentos</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {favorites.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-primary font-medium mb-2">{item.category}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromFavorites(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          Ver local
                        </Button>
                        <Button size="sm">
                          Contato
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}