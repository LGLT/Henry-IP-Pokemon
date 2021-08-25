import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { addActualPokemonData } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import styles from './styles/Pokemon.module.css'

export default function Pokemon({name, id, info, localData}){
    const [pokemonData, setPokemonData] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if(localData){
            setPokemonData(localData);
        } 
        else {
            setPokemonData([name, id, info]);
        }
    },[name, id, info, localData])

    const pokemonDataToStore = () => {
        dispatch(addActualPokemonData(pokemonData))
    }

    //  Método para cambiar la primera letra del pokemon a mayúscula
    const capitalize = (name) =>{
        let mayus = name.slice(0,1);
        name = name.slice(1,name.length);
        return mayus.toUpperCase().concat(name)
    }
    
    return (
        <div className={styles.pokemonCard}>
            {
                localData
                ?
                
                <>{console.log(localData)}
                    <Link 
                    to={`/pokemons/${name}`} 
                    onClick={() => pokemonDataToStore()}
                    className={styles.title} 
                    >
                    {capitalize(name)}
                    </Link>
                    <h3>Img not found.</h3>
                    <h5>
                        Types: {localData.types.map(t => <p key={t.name}>{t.name}</p> )}
                    </h5>
                </>
                      
                :
                info 
                    ?
                    <>
                        <Link 
                        to={`/pokemons/${name}`} 
                        onClick={() => pokemonDataToStore()}
                        className={styles.title} 
                        >
                        {capitalize(name)}
                        </Link>
                        <img src={info.data[0].sprites.front_default} alt="img" />
                        <h5>
                            Types: {info.data[0].types.map(t => <p key={t.type.name}>{t.type.name}</p> )}
                        </h5>
                    </>
                    :
                    <h6>Loading data...</h6>                    
            }
        </div>
        );
}