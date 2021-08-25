export const ADD_ALL_POKEMONS_TO_STORE = 'ADD_ALL_POKEMONS_TO_STORE';
export const ADD_ACTUAL_POKEMON_DATA = 'ADD_ACTUAL_POKEMON_DATA'
export const ADD_FILTER_TYPE = 'ADD_FILTER_TYPE'
export const ADD_FILTERED_POKEMON = 'ADD_FILTERED_POKEMON'
export const SET_LOAD_FILTERED_POKEMON_BY_NAME = 'SET_LOAD_FILTERED_POKEMON_BY_NAME'

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

export const addFilterType = (filterType) => {
    return {
        type: ADD_FILTER_TYPE,
        payload: filterType
    }
}

export const addFilteredPokemon = (filteredPokemon) => {
    return {
        type: ADD_FILTERED_POKEMON,
        payload: filteredPokemon
    }
}

export const setLoadFilteredPokemonByName = (option) => {
    return {
        type: SET_LOAD_FILTERED_POKEMON_BY_NAME,
        payload: option
    }
}