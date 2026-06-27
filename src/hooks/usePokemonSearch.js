import { useQuery } from "@tanstack/react-query";
import { searchPokemon } from "../api/pokemonApi";

export const usePokemonSearch = (name)=>{
    return useQuery({
        queryKey:[
            "pokemon-search",
            name
        ],
        queryFn:()=>searchPokemon(name),
        enabled:Boolean(name),
    });
};