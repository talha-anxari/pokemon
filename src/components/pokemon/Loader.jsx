const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-32">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary shadow-[0_0_20px_color-mix(in_oklch,var(--primary),transparent_45%)]" />
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-secondary animate-spin [animation-duration:1.2s] [animation-direction:reverse]" />
      </div>
      <p className="text-sm font-medium text-muted-foreground tracking-wide animate-pulse">
        Loading Pokémon...
      </p>
    </div>
  );
};

export default Loader;
