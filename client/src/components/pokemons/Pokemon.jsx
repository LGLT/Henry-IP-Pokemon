import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { addActualPokemonData } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import styles from './styles/Pokemon.module.css'

export default function Pokemon(props){
    //const {name, id} = props;
    const [pokemonData, setPokemonData] = useState()
    const [loading, setLoading] = useState(true)
    //  Hook para el dispatch
    const dispatch = useDispatch()

    useEffect(() => {
        const getPokemonData = async () => {
            const response = await axios.get(`http://localhost:3001/pokemons/${props.id}`);
            setPokemonData(response.data);
            setLoading(false)
        }
        getPokemonData();
    },[])

    const pokemonDataToStore = () => {
        dispatch(addActualPokemonData(pokemonData[0]))
    }

    if(loading) return <h3>Loading</h3>

    //  Método para cambiar la primera letra del pokemon a mayúscula
    const capitalize = (name) =>{
        let mayus = name.slice(0,1);
        name = name.slice(1,name.length);
        return mayus.toUpperCase().concat(name)
    }

    return (
        <div className={styles.pokemonCard}>
            <Link 
                to={`/pokemons/${props.name}`} 
                onClick={() => pokemonDataToStore()}
                className={styles.title} 
            >
                {capitalize(pokemonData[0].name)}
            </Link>
            <img src={pokemonData[0].sprites.front_default} alt="img" />
            <h5>Types: {pokemonData[0].types.map(t => <p key={t.type.name}>{t.type.name}</p>)}</h5>
        </div>
    );
}