import { Link } from "react-router-dom";
import { getPokemonImage } from "@/lib/getPokemonImage";
import { getPokemonId } from "@/lib/getPokemonId";
import { getTypeColor } from "@/lib/typeColors";
import { cn } from "@/lib/utils";
import FavoriteButton from "./FavoriteButton";

const PokemonCard = ({ pokemon }) => {
  const id = getPokemonId(pokemon);
  const image = getPokemonImage(pokemon);

  // List endpoint se types nahi aate, sirf favorites/details mein milte hain
  const primaryType = pokemon.types?.[0]?.type?.name;
  const typeColor = getTypeColor(primaryType);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-md transition-all duration-300",
        "hover:-translate-y-1 hover:border-white/20",
        typeColor.glow,
        "hover:shadow-lg",
      )}
    >
      {/* Soft radial glow on hover */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20",
          typeColor.bg,
        )}
      />

      <div className="absolute top-3 right-3 z-10">
        <FavoriteButton pokemon={{ ...pokemon, id }} />
      </div>

      <Link to={`/pokemon/${pokemon.name}`}>
        <img
          src={image}
          alt={pokemon.name}
          loading="lazy"
          className="mx-auto h-36 w-36 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h2 className="mt-4 text-center text-lg font-semibold capitalize text-foreground">
          {pokemon.name}
        </h2>

        <p className="mt-1 text-center font-mono text-sm text-muted-foreground">
          #{String(id).padStart(3, "0")}
        </p>

        {primaryType && (
          <div className="mt-3 flex justify-center">
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium capitalize",
                typeColor.bg,
                typeColor.text,
              )}
            >
              {primaryType}
            </span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default PokemonCard;
