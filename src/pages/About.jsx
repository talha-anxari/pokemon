import { FiGithub } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/lib/siteConfig";

const TECH_STACK = [
  "React",
  "Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "React Query",
  "Zustand",
  "React Router",
  "Axios",
];

const About = () => {
  return (
    <div className="mx-auto max-w-3xl py-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          About this <span className="text-primary neon-text">Project</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          A deep dive into why and how this Pokédex was built
        </p>
      </div>

      <div className="space-y-10">
        {/* Purpose */}
        <section className="rounded-2xl border border-white/10 bg-card/60 p-7 backdrop-blur-md">
          <h2 className="mb-3 text-xl font-bold">Why I built this</h2>
          <p className="leading-relaxed text-muted-foreground">
            This project started as a way to practice consuming a real public
            API (PokéAPI) at production quality — proper caching, debounced
            search, persisted client state, and a polished, type-aware UI
            instead of a bare-bones CRUD demo. The goal was to show full
            front-to-back thinking: architecture, state management, and design —
            not just "fetch and display."
          </p>
        </section>

        {/* What it does */}
        <section className="rounded-2xl border border-white/10 bg-card/60 p-7 backdrop-blur-md">
          <h2 className="mb-3 text-xl font-bold">What it does</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Browse and paginate through every Pokémon via PokéAPI</li>
            <li>• Debounced live search by name</li>
            <li>• Detailed stat, type, and ability breakdown per Pokémon</li>
            <li>• Persisted favorites using local storage-backed state</li>
            <li>• Type-based dynamic theming across cards and detail pages</li>
          </ul>
        </section>

        {/* Tech stack */}
        <section className="rounded-2xl border border-white/10 bg-card/60 p-7 backdrop-blur-md">
          <h2 className="mb-4 text-xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-card/60 p-7 text-center backdrop-blur-md">
          <h2 className="text-xl font-bold">Check out the code</h2>
          <p className="text-muted-foreground">
            The full source is available on GitHub.
          </p>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_18px_color-mix(in_oklch,var(--primary),transparent_45%)]"
          >
            <FiGithub className="h-4 w-4" />
            View on GitHub
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
