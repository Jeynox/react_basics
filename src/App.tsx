import { useState } from "react";
import "./App.css";
import CardPokemon from "./components/CardPokemon";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  const [index, setIndex] = useState(0);

  const handleClick = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <div>
      <NavBar setIndex={setIndex} pokemonList={pokemonList}/> 
      <CardPokemon 
        pokemon={pokemonList[index]
      } />
    </div>
  );
}

export default App;