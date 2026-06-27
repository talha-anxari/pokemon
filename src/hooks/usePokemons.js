import { getPokemon } from "../api/pokemonApi"
import { useQuery } from "@tanstack/react-query"

export const usePokemon = (page) => {
    return useQuery({
        queryKey: ["pokemon", page],
        queryFn: () => getPokemon(page)
    });
};