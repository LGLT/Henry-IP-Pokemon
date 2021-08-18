export const ADD_ALL_POKEMONS_TO_STORE = 'ADD_ALL_POKEMONS_TO_STORE';
export const ADD_ACTUAL_POKEMON_DATA = 'ADD_ACTUAL_POKEMON_DATA'

export const addAllPokemonsToStore = (allPokemons) => {
    return{
        type: ADD_ALL_POKEMONS_TO_STORE,
        payload: allPokemons
    }
}

export const addActualPokemonData = (pokemonData) => {
    return {
        type: ADD_ACTUAL_POKEMON_DATA,
        payload: pokemonData
    }
}