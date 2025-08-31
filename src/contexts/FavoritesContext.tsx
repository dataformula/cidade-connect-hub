import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FavoriteItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  rating: number;
  type: 'establishment' | 'property';
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    {
      id: '1',
      name: 'Restaurante do João',
      category: 'Restaurantes',
      description: 'Comida caseira e deliciosa há 20 anos',
      rating: 4.8,
      type: 'establishment'
    },
    {
      id: '2',
      name: 'Casa Centro - 3 quartos',
      category: 'Imóveis',
      description: 'Casa ampla no centro da cidade',
      rating: 4.5,
      type: 'property'
    }
  ]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites(prev => [...prev.filter(fav => fav.id !== item.id), item]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some(fav => fav.id === id);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}