import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { usePokemonDetails } from "../hooks/usePokemonDetails";

import Loader from "../components/pokemon/Loader";
import StatsBar from "@/components/pokemon/StatsBar";
import FavoriteButton from "@/components/pokemon/FavoriteButton";
import { getTypeColor, getPrimaryType } from "@/lib/typeColors";
import { cn } from "@/lib/utils";

const PokemonDetails = () => {
  const { name } = useParams();

  const { data, isLoading, isError } = usePokemonDetails(name);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <h1 className="text-center mt-10 text-2xl text-destructive">
        Pokemon not found
      </h1>
    );
  }

  const primaryType = getPrimaryType(data);
  const typeColor = getTypeColor(primaryType);

  return (
    <div>
      {/* Back Button */}
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Pokemon Image */}
        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-10 backdrop-blur-md",
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute -inset-16 -z-10 rounded-full opacity-25 blur-3xl",
              typeColor.bg,
            )}
          />
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            alt={data.name}
            className="w-72 drop-shadow-2xl"
          />
        </div>

        {/* Pokemon Details */}
        <div>
          {/* Name + Favorite */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold capitalize">
                {data.name}
              </h1>
              <p className="mt-2 font-mono text-muted-foreground">
                #{String(data.id).padStart(3, "0")}
              </p>
            </div>

            <FavoriteButton pokemon={data} />
          </div>

          {/* Types */}
          <div className="mb-8 flex flex-wrap gap-3">
            {data.types.map((type) => {
              const tc = getTypeColor(type.type.name);
              return (
                <span
                  key={type.type.name}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold capitalize",
                    tc.bg,
                    tc.text,
                  )}
                >
                  {type.type.name}
                </span>
              );
            })}
          </div>

          {/* Height & Weight */}
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-card/60 p-4 backdrop-blur-md">
              <p className="text-sm text-muted-foreground">Height</p>
              <p className="text-xl font-bold">{data.height / 10} m</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-card/60 p-4 backdrop-blur-md">
              <p className="text-sm text-muted-foreground">Weight</p>
              <p className="text-xl font-bold">{data.weight / 10} kg</p>
            </div>
          </div>

          {/* Abilities */}
          <h2 className="mb-4 text-xl font-bold">Abilities</h2>

          <div className="mb-10 flex flex-wrap gap-3">
            {data.abilities.map((item) => (
              <span
                key={item.ability.name}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm capitalize"
              >
                {item.ability.name}
              </span>
            ))}
          </div>

          {/* Stats */}
          <h2 className="mb-5 text-xl font-bold">Stats</h2>

          <StatsBar stats={data.stats} typeColor={typeColor} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
