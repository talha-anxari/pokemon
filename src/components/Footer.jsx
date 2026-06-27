import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/siteConfig";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-card/40 backdrop-blur-md">
      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/40">
                <Zap className="h-4 w-4 text-primary" fill="currentColor" />
              </span>
              <span className="text-base font-bold">
                Poké<span className="text-primary">dex</span>
              </span>
            </Link>
            <p className="max-w-xs text-center text-sm text-muted-foreground md:text-left">
              A portfolio project exploring PokéAPI with a modern React stack.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-secondary/40 hover:text-secondary"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
          Built with ♥ by Talha · Data from{" "}
          <a
            href="https://pokeapi.co"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            PokéAPI
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
