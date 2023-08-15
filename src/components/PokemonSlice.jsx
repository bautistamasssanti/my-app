import React from 'react';
import axios from 'axios';
function PokemonSlice() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonList(url) {
      try {
        const response = await axios.get(url);

        setPokemonList(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        setIsLoading(false);
      }
    }

    fetchPokemonList('https://pokeapi.co/api/v2/pokemon?limit=30');
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {pokemonList.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
          <div>
            {prevPage && <button onClick={() => fetchPokemonList(prevPage)}>Previous</button>}
            {nextPage && <button onClick={() => fetchPokemonList(nextPage)}>Next</button>}
          </div>
        </div>
      )}
    </div>
  );
}
  export default pokemonSlice;