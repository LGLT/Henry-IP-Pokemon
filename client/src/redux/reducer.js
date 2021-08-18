import { ADD_ALL_POKEMONS_TO_STORE } from "./actions"

const initialState = {
    allStorePokemons: [],
    loadStorePokemons: false
}

export default function rootReducer(state = initialState, action){
    if(action.type === ADD_ALL_POKEMONS_TO_STORE){
        return{
            ...state,
            allStorePokemons: [action.payload],
            loadStorePokemons: true
        }
    }
    return state;
}