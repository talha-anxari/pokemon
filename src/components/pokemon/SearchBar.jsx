import { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ setSearchParams }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setSearchParams({
      search: value,
      page: 1,
    });
  };

  const clearHandler = () => {
    setValue("");
    setSearchParams({});
  };

  return (
    <form onSubmit={submitHandler} className="mb-10 flex gap-3">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Pokémon by name..."
          className="w-full rounded-xl border border-white/10 bg-card/60 py-3 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />

        {value && (
          <button
            type="button"
            onClick={clearHandler}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <button
        type="submit"
        className="rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_18px_color-mix(in_oklch,var(--primary),transparent_45%)] active:scale-95"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
