import { Link, NavLink } from "react-router-dom";
import { Heart, Zap } from "lucide-react";
import { useFavoriteStore } from "../store/useFavoriteStore";
import { NAV_LINKS } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40 transition-all group-hover:ring-primary/70 group-hover:shadow-[0_0_18px_color-mix(in_oklch,var(--primary),transparent_40%)]">
            <Zap className="h-5 w-5 text-primary" fill="currentColor" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Poké<span className="text-primary neon-text">dex</span>
          </span>
        </Link>

        {/* Nav links - desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Favorites link */}
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
              isActive
                ? "border-secondary/50 bg-secondary/15 text-secondary shadow-[0_0_16px_color-mix(in_oklch,var(--secondary),transparent_55%)]"
                : "border-white/10 bg-white/5 text-foreground/80 hover:border-secondary/40 hover:text-secondary",
            )
          }
        >
          <Heart
            className="h-4 w-4"
            fill={favorites.length > 0 ? "currentColor" : "none"}
          />
          <span className="hidden sm:inline">Favorites</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs tabular-nums">
            {favorites.length}
          </span>
        </NavLink>
      </nav>

      {/* Nav links - mobile */}
      <div className="flex items-center justify-center gap-6 border-t border-white/10 py-2 md:hidden">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors",
                isActive
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground",
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
