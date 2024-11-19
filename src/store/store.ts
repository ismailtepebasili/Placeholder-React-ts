/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  userId: number;
}

export const useStore = create(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (photo: Photo) =>
        set((state: { favorites: any; }) => ({ favorites: [...state.favorites, photo] })),
      removeFavorite: (id: any) =>
        set((state: { favorites: any[]; }) => ({
          favorites: state.favorites.filter((photo: { id: any; }) => photo.id !== id),
        })),
    }),
    {
      name: "favorites-storage",
    }
  )
);
