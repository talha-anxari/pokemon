import { cn } from "@/lib/utils";

const STAT_LABELS = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

const StatsBar = ({ stats, typeColor }) => {
  return (
    <div className="space-y-4">
      {stats.map((item) => {
        const value = item.base_stat;
        const percentage = Math.min((value / 150) * 100, 100);
        const label = STAT_LABELS[item.stat.name] ?? item.stat.name;

        return (
          <div key={item.stat.name}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="font-medium text-muted-foreground">{label}</span>
              <span className="font-mono font-semibold text-foreground">
                {value}
              </span>
            </div>

            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                style={{ width: `${percentage}%` }}
                className={cn(
                  "h-full rounded-full transition-all duration-700 ease-out",
                  typeColor?.bg ?? "bg-primary",
                  "shadow-[0_0_10px_currentColor]",
                )}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBar;
