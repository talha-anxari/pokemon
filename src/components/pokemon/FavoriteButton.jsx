import { Heart } from "lucide-react";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import { cn } from "@/lib/utils";

const FavoriteButton = ({ pokemon }) => {
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  // Seedha favorites array ko subscribe kar rahe hain (get() ke zariye nahi),
  // taake jab bhi array update ho (add/remove/hydrate) ye component re-render ho.
  const active = useFavoriteStore((state) =>
    state.favorites.some((item) => item.id === pokemon.id),
  );

  const clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (active) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  };

  return (
    <button
      onClick={clickHandler}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95",
        active
          ? "bg-destructive/15 shadow-[0_0_16px_color-mix(in_oklch,var(--destructive),transparent_45%)]"
          : "bg-white/5 hover:bg-white/10",
      )}
    >
      <Heart
        className={cn(
          "h-5 w-5 transition-colors",
          active ? "text-destructive" : "text-foreground/60",
        )}
        fill={active ? "currentColor" : "none"}
      />
    </button>
  );
};

export default FavoriteButton;
