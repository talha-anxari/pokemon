import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../api/pokemonApi";

export const usePokemonDetails = (name)=>{
    return useQuery({
        queryKey:[
            "pokemon-details",
            name
        ],
        queryFn:()=>getPokemonDetails(name),
        enabled:!!name,
    });
};