import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Text content */}
        <div className="text-center md:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Powered by PokéAPI
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Catch &apos;em all in{" "}
            <span className="text-primary neon-text">one place</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground md:mx-0">
            Search, explore, and save your favorite Pokémon with detailed stats,
            types, and abilities — all in a sleek dark interface.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center">
            <a
              href="#pokemon-grid"
              className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_22px_color-mix(in_oklch,var(--primary),transparent_40%)]"
            >
              Explore Pokédex
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              to="/favorites"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground/80 transition-all hover:border-white/20 hover:text-foreground"
            >
              View Favorites
            </Link>
          </div>
        </div>

        {/* Visual - animated pokeball */}
        <div className="relative flex justify-center">
          <div className="relative h-56 w-56 md:h-72 md:w-72">
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10 blur-2xl" />
            <svg
              viewBox="0 0 200 200"
              className="relative h-full w-full drop-shadow-[0_0_30px_color-mix(in_oklch,var(--primary),transparent_60%)] [animation:spin_12s_linear_infinite]"
            >
              <circle cx="100" cy="100" r="92" fill="oklch(0.97 0 0)" />
              <path d="M8 100a92 92 0 0 1 184 0z" fill="oklch(0.6 0.22 25)" />
              <rect
                x="8"
                y="94"
                width="184"
                height="12"
                fill="oklch(0.13 0.012 264)"
              />
              <circle cx="100" cy="100" r="28" fill="oklch(0.13 0.012 264)" />
              <circle cx="100" cy="100" r="18" fill="oklch(0.97 0 0)" />
              <circle cx="100" cy="100" r="9" fill="oklch(0.84 0.19 95)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
