import { Search, Heart, BarChart3, Sparkles } from "lucide-react";
import { FEATURES } from "@/lib/siteConfig";

const ICONS = {
  Search,
  Heart,
  BarChart3,
  Sparkles,
};

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Everything you need to{" "}
          <span className="text-primary neon-text">explore</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Built with a modern stack for a fast, smooth experience
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => {
          const Icon = ICONS[feature.icon];
          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30 transition-all group-hover:shadow-[0_0_16px_color-mix(in_oklch,var(--primary),transparent_50%)]">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
