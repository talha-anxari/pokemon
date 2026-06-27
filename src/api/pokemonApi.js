import api from "./axios";

export const getPokemon = async (page = 1, limit = 20, name) => {
    const offset = (page - 1) * limit;
    const { data } = await api.get("/pokemon", {
        params: {
            limit,
            offset
        },
    });
    return data;
};

export const searchPokemon = async (name) => {
    const { data } = await api.get(
        `/pokemon/${name.toLowerCase()}`
    );
    return data;
};

export const getPokemonDetails = async (name) => {
    const { data } = await api.get(
        `/pokemon/${name}`
    );
    return data;

};