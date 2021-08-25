import { ADD_ACTUAL_POKEMON_DATA, ADD_ALL_POKEMONS_TO_STORE, ADD_FILTER_TYPE, ADD_FILTERED_POKEMON, SET_LOAD_FILTERED_POKEMON_BY_NAME } from "./actions"

const initialState = {
    allStorePokemons: [],
    loadStorePokemons: false,
    actualPokemonData: [],
    filterByType: "",
    filteredPokemons: [],
    filteredPokemonByName: [],
    loadFilteredPokemonByName: false
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
    if(action.type === ADD_FILTER_TYPE){
        return{
            ...state,
            filterByType: action.payload
        }
    }
    if(action.type === ADD_FILTERED_POKEMON){
        return{
            ...state,
            filteredPokemonByName: [action.payload],
            loadFilteredPokemonByName: true
        }
    }
    if(action.type === SET_LOAD_FILTERED_POKEMON_BY_NAME){
        return{
            ...state,
            loadFilteredPokemonByName: action.payload
        }
    }
    return state;
}

