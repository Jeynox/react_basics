function NavBar() {
    interface Pokemon {
        name: string;
        imgSrc?: string;
      }
      
      interface NavBarProps {
        setIndex: (index: number) => void;
        pokemonList: Pokemon[];
      }

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
            <button
                key={pokemon.name}
                type="button"
                onClick={() => setIndex(index) :NavBarProps}
            >
                {pokemon.name}
            </button>
        ))}
      </nav>
    )
}

export default NavBar;