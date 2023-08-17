import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';


function App() {
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
    <div className="App">
      <Header></Header>
      {pokemonList.map(item => (
        <PokemonCard name={item.name} url={item.url} />
      ))}
    </div>
  );

}

export default App;
