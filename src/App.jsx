import { useEffect } from "react";
import Loader from "./components/pokemon/Loader";
import PokemonGrid from "./components/pokemon/PokemonGrid";
import PokemonPagination from "./components/pokemon/PokemonPagination";
import SearchBar from "./components/pokemon/SearchBar";
import HeroSection from "./components/home/HeroSection";
import StatsStrip from "./components/home/StatsStrip";
import FeaturesSection from "./components/home/FeaturesSection";
import CtaBanner from "./components/home/CtaBanner";
import { useDebounce } from "./hooks/useDebounce";
import { usePokemonSearch } from "./hooks/usePokemonSearch";
import { useSearchParams } from "react-router-dom";
import { usePokemon } from "./hooks/usePokemons";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const debouncedSearch = useDebounce(search);

  // Normal Pokemon List
  const { data, isLoading, isError } = usePokemon(page);

  // Search Pokemon
  const {
    data: searchedPokemon,
    isLoading: searchLoading,
    isError: searchError,
  } = usePokemonSearch(debouncedSearch);

  // Scroll top on page change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <div>
      <HeroSection />
      <StatsStrip />
      <FeaturesSection />

      <section id="pokemon-grid" className="py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Browse the <span className="text-primary neon-text">Pokédex</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Search by name or scroll through the full collection
          </p>
        </div>

        <SearchBar setSearchParams={setSearchParams} />

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p className="text-center text-2xl text-destructive py-10">
            Something went wrong
          </p>
        ) : debouncedSearch ? (
          searchLoading ? (
            <p className="text-center text-lg text-muted-foreground py-10">
              Searching...
            </p>
          ) : searchError ? (
            <p className="text-center text-lg text-muted-foreground py-10">
              Pokémon Not Found
            </p>
          ) : (
            <PokemonGrid pokemons={[searchedPokemon]} />
          )
        ) : (
          <PokemonGrid pokemons={data.results} />
        )}

        {!debouncedSearch && !isLoading && !isError && (
          <PokemonPagination
            page={page}
            totalPages={Math.ceil(data.count / 20)}
            setSearchParams={setSearchParams}
          />
        )}
      </section>

      <CtaBanner />
    </div>
  );
}

export default App;
