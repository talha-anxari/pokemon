import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center">
      <h1 className="text-7xl md:text-8xl font-bold text-primary neon-text">
        404
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Looks like this Pokémon escaped.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_18px_color-mix(in_oklch,var(--primary),transparent_45%)]"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
