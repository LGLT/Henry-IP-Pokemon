export const ADD_ALL_POKEMONS_TO_STORE = 'ADD_ALL_POKEMONS_TO_STORE';

export const addAllPokemonsToStore = (allPokemons) => {
    return{
        type: ADD_ALL_POKEMONS_TO_STORE,
        payload: allPokemons
    }
}