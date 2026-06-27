const SkeletonCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="mx-auto mb-5 h-36 w-36 rounded-xl bg-white/5" />

      <div className="mx-auto h-4 w-2/3 rounded-full bg-white/5" />
      <div className="mx-auto mt-3 h-3 w-1/3 rounded-full bg-white/5" />

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default SkeletonCard;
