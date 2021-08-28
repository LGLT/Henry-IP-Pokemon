import React, { useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import { addFilteredPokemon } from '../../redux/actions';

import styles from './styles/FilterByName.module.css'

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
                    dispatch(addFilteredPokemon(p))
                }
            })   
        }
    }

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Pokemon name' onChange={handleSubmit} className={styles.inputSearch}/>
                <button onSubmit={handleSubmit} className={styles.btnSearch} >Search</button>
            </form>
        </div>
    );
}