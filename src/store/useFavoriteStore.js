import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      hasHydrated: false,

      addFavorite: (pokemon) => {
        const exists = get().favorites.some(
          (item) => item.id === pokemon.id
        );

        if (!exists) {
          set((state) => ({
            favorites: [...state.favorites, pokemon],
          }));
        }
      },

      removeFavorite: (id) => {
        set((state) => ({
          favorites: state.favorites.filter(
            (item) => item.id !== id
          ),
        }));
      },

      isFavorite: (id) => {
        return get().favorites.some(
          (item) => item.id === id
        );
      },

      setHasHydrated: (value) => {
        set({ hasHydrated: value });
      },
    }),
    {
      name: "pokemon-favorites",
      onRehydrateStorage: () => (state) => {
        // localStorage se data load complete hone par flag set hota hai,
        // taake components ko pata chale ke ab favorites ka data reliable hai
        state?.setHasHydrated(true);
      },
    }
  )
);