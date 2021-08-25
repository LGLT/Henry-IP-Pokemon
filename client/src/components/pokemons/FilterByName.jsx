import React, { useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import { addFilteredPokemon } from '../../redux/actions';

export default function FilterByName () {
    const [filterInput, setFilterInput] = useState("");

    const dispatch = useDispatch()

    const pokemonsfromStore = useSelector(store => store.allStorePokemons);

    const handleSubmit = (event) => {                                   
        event.preventDefault();
        if(event.type === "change"){                                    //  Guardar valor del input
            setFilterInput(event.target.value);
        }
        if(event.type === "submit"){                                    //  Encontrar pokemon filtrado
            pokemonsfromStore[0].forEach(p => { 
                if(p.name.toLowerCase() === filterInput.toLowerCase()){
                    console.log(p)
                    dispatch(addFilteredPokemon(p))
                }
            })   
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Pokemon name' onChange={handleSubmit} />
                <button onSubmit={handleSubmit}>Search</button>
            </form>
        </div>
    );
}