import { Link } from "react-router-dom";
import { HeartCrack } from "lucide-react";
import PokemonGrid from "../components/pokemon/PokemonGrid";
import Loader from "../components/pokemon/Loader";
import { useFavoriteStore } from "../store/useFavoriteStore";

const Favorites = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const hasHydrated = useFavoriteStore((state) => state.hasHydrated);

  // localStorage se favorites load hone tak wait karo, taake "No Favorites"
  // wala empty state ek second ke liye flash na ho jaaye refresh par.
  if (!hasHydrated) {
    return <Loader />;
  }

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 ring-1 ring-destructive/30">
          <HeartCrack className="h-9 w-9 text-destructive" />
        </div>

        <h1 className="mb-2 text-2xl font-bold">No Favorites Yet</h1>
        <p className="mb-6 text-muted-foreground">
          Add Pokémon to your favorites to see them here.
        </p>

        <Link
          to="/"
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_18px_color-mix(in_oklch,var(--primary),transparent_45%)]"
        >
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-10 text-center text-4xl font-bold">
        My Favorites <span className="text-destructive">♥</span>
      </h1>

      <PokemonGrid pokemons={favorites} />
    </div>
  );
};

export default Favorites;
