import { SITE_STATS } from "@/lib/siteConfig";

const StatsStrip = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-card/60 p-8 backdrop-blur-md md:grid-cols-4">
        {SITE_STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-primary neon-text md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
