import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/15 via-card/60 to-secondary/15 p-10 text-center backdrop-blur-md md:p-16">
        <div className="pointer-events-none absolute -top-16 left-1/3 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-1/3 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Ready to start exploring?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Jump back into the Pokédex and discover your next favorite Pokémon.
        </p>

        <a
          href="#pokemon-grid"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_22px_color-mix(in_oklch,var(--primary),transparent_40%)]"
        >
          Start exploring
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
