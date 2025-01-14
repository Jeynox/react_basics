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

  const [i, setI] = useState(0);

  const handlerClick = () => {
    setI(i + 1);
  }

  const handlerClickChange = () => {
    setI(i - 1);
  }

  return (
    <div>
      <CardPokemon pokemon={
        pokemonList[i]
      } />
      {i > 0 ? <button onClick={handlerClickChange}>Précédent</button> : <button disabled onClick={handlerClickChange}>Précédent</button>}
      {i < pokemonList.length - 1 ? <button onClick={handlerClick}>Suivant</button> : <button disabled onClick={handlerClick}>Suivant</button>}
    </div>
  );
}

export default App;