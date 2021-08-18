import { ADD_ACTUAL_POKEMON_DATA, ADD_ALL_POKEMONS_TO_STORE } from "./actions"

const initialState = {
    allStorePokemons: [],
    loadStorePokemons: false,
    actualPokemonData: []
}

export default function rootReducer(state = initialState, action){
    if(action.type === ADD_ALL_POKEMONS_TO_STORE){
        return{
            ...state,
            allStorePokemons: [action.payload],
            loadStorePokemons: true
        }
    }
    if(action.type === ADD_ACTUAL_POKEMON_DATA){
        return{
            ...state,
            actualPokemonData: [action.payload]
        }
    }
    return state;
}