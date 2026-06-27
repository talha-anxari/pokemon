export const getPokemonImage = (pokemon) => {

  const id = pokemon.id
    ? pokemon.id
    : pokemon.url.split("/")[6];


  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

};