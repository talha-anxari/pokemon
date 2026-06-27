// Har Pokemon type ka color + glow define kiya hai.
// bg/text = badge ke liye, glow = card hover / shadow ke liye, ring = border accent

export const TYPE_COLORS = {
  normal: { bg: "bg-zinc-500", text: "text-zinc-100", glow: "shadow-zinc-400/40", ring: "ring-zinc-400/50" },
  fire: { bg: "bg-orange-500", text: "text-orange-50", glow: "shadow-orange-500/50", ring: "ring-orange-400/60" },
  water: { bg: "bg-cyan-500", text: "text-cyan-50", glow: "shadow-cyan-500/50", ring: "ring-cyan-400/60" },
  electric: { bg: "bg-yellow-400", text: "text-yellow-950", glow: "shadow-yellow-400/60", ring: "ring-yellow-300/70" },
  grass: { bg: "bg-green-500", text: "text-green-50", glow: "shadow-green-500/50", ring: "ring-green-400/60" },
  ice: { bg: "bg-sky-400", text: "text-sky-950", glow: "shadow-sky-400/50", ring: "ring-sky-300/60" },
  fighting: { bg: "bg-red-600", text: "text-red-50", glow: "shadow-red-600/50", ring: "ring-red-500/60" },
  poison: { bg: "bg-purple-500", text: "text-purple-50", glow: "shadow-purple-500/50", ring: "ring-purple-400/60" },
  ground: { bg: "bg-amber-600", text: "text-amber-50", glow: "shadow-amber-600/50", ring: "ring-amber-500/60" },
  flying: { bg: "bg-indigo-400", text: "text-indigo-50", glow: "shadow-indigo-400/50", ring: "ring-indigo-300/60" },
  psychic: { bg: "bg-pink-500", text: "text-pink-50", glow: "shadow-pink-500/50", ring: "ring-pink-400/60" },
  bug: { bg: "bg-lime-500", text: "text-lime-950", glow: "shadow-lime-500/50", ring: "ring-lime-400/60" },
  rock: { bg: "bg-yellow-700", text: "text-yellow-50", glow: "shadow-yellow-700/50", ring: "ring-yellow-600/60" },
  ghost: { bg: "bg-violet-600", text: "text-violet-50", glow: "shadow-violet-600/50", ring: "ring-violet-500/60" },
  dragon: { bg: "bg-indigo-600", text: "text-indigo-50", glow: "shadow-indigo-600/60", ring: "ring-indigo-500/60" },
  dark: { bg: "bg-zinc-700", text: "text-zinc-100", glow: "shadow-zinc-700/50", ring: "ring-zinc-600/60" },
  steel: { bg: "bg-slate-400", text: "text-slate-950", glow: "shadow-slate-400/50", ring: "ring-slate-300/60" },
  fairy: { bg: "bg-fuchsia-400", text: "text-fuchsia-950", glow: "shadow-fuchsia-400/50", ring: "ring-fuchsia-300/60" },
};

export const DEFAULT_TYPE_COLOR = {
  bg: "bg-primary",
  text: "text-primary-foreground",
  glow: "shadow-primary/40",
  ring: "ring-primary/50",
};

export const getTypeColor = (typeName) => {
  return TYPE_COLORS[typeName?.toLowerCase()] ?? DEFAULT_TYPE_COLOR;
};

// Pehla type nikalne ke liye - card/details pe primary glow color ke liye
export const getPrimaryType = (pokemonDetailData) => {
  return pokemonDetailData?.types?.[0]?.type?.name;
};