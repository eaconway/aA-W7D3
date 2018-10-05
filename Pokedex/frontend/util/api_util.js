export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: 'GET'
  });
}

export const fetchPokemon = (id) => {
  return $.ajax({
    url: `/api/pokemon/${id}`,
    method: 'GET'
  });
}

export const createPokemon = (pokemon) => {
  return $.ajax({
    url: '/api/pokemon/',
    method: 'POST',
    data: {
      pokemon: {
        attack: pokemon.attack,
        defense: pokemon.defense,
        image_url: pokemon.imageUrl,
        name: pokemon.name,
        poke_type: pokemon.pokeType
      }
    }
  });
}
