import {useInfiniteQuery} from 'react-query';
import axios from 'axios';

const fetchPokemonData = async ({pageParam = 0}) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageParam}`,
  );
  const pokemonList = response.data.results;

  // Fetch additional details for each Pokémon
  const pokemonDetailsPromises = pokemonList.map(
    async (pokemon: {url: string}) => {
      const detailsResponse = await axios.get(pokemon.url);
      return detailsResponse.data;
    },
  );

  const pokemonDetails = await Promise.all(pokemonDetailsPromises);

  // Combine the Pokémon list and details
  const pokemonData = pokemonList.map((pokemon: {name: any}, index: any) => ({
    id: pokemonDetails[index].id,
    name: pokemon.name,
    picture: pokemonDetails[index].sprites.front_default,
    customData: pokemonDetails[index],
  }));

  return {
    pokemonData,
    nextOffset: response.data.next
      ? response.data.next.split('offset=')[1]
      : null,
  };
};

const usePokemons = () => {
  return useInfiniteQuery('pokemon', fetchPokemonData, {
    getNextPageParam: lastPage => lastPage.nextOffset,
  });
};

export default usePokemons;
