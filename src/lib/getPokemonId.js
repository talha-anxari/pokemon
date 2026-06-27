export const getPokemonId = (pokemon) => {
  return Number(
    pokemon.id ?? pokemon.url.split("/")[6]
  );
};