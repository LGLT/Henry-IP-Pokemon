import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { addActualPokemonData } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import styles from './styles/Pokemon.module.css'

import icons from './importTypesIcons'


export default function Pokemon({name, id, info, localData, filtered}){
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
    
    const findIcon = (typeName) => {
        typeName = typeName+"Icon"
        return <img src={icons[typeName]} alt="" />
    }

    return (
        <div className={styles.pokemonCard}>
            {
                localData
                ?
                    filtered
                    ?
                    <>
                        <div className={styles.filteredPokemon}>
                            <div className={styles.filteredPokemonTitleAndImg}>
                                <div className={styles.titleDiv}>
                                    <Link to={`/pokemons/${name}`} onClick={() => pokemonDataToStore()} className={styles.title} >
                                        {capitalize(name)}
                                    </Link>
                                </div>
                                <div className={styles.imgDiv}><h3>Img not found.</h3> </div>
                            </div>                        
                            <div className={styles.filteredPokemonTypesDiv}>
                                <h5 className={styles.titleTypes}>Types:</h5>
                                <div className={styles.filteredPokemonTypesContainer}>
                                    {
                                    localData.types.map(t => 
                                        {return (
                                            <div className={styles.typeContainer}>
                                                <p key={t.name}>{capitalize(t.name)}</p> 
                                                    {findIcon(t.name)}
                                            </div>
                                        );}
                                    )
                                    }
                                </div>
                            </div>
                        </div>    
                        </>
                    :
                    <>
                        <div className={styles.titleDiv}>
                            <Link to={`/pokemons/${name}`} onClick={() => pokemonDataToStore()} className={styles.title} >
                                {capitalize(name)}
                            </Link>
                        </div>
                        <div className={styles.imgDiv}><h3>Img not found.</h3> </div>
                        <div className={styles.typesDiv}>
                            <h5 className={styles.titleTypes}>Types:</h5>
                            <div className={styles.typesContainer}>
                                {
                                localData.types.map(t => 
                                    {return (
                                        <div className={styles.typeContainer}>
                                            <p key={t.name}>{capitalize(t.name)}</p> 
                                                {findIcon(t.name)}
                                        </div>
                                    );}
                                )
                                }
                            </div>
                        </div>
                    </>
                      
                :
                info 
                    ?
                    filtered
                        ?
                        <>
                        <div className={styles.filteredPokemon}>
                            <div className={styles.filteredPokemonTitleAndImg}>
                                <div className={styles.titleDiv}>
                                    <Link to={`/pokemons/${name}`} onClick={() => pokemonDataToStore()} className={styles.title} >
                                        {capitalize(name)}
                                    </Link>
                                </div>
                                <div className={styles.imgDiv}>
                                    <img src={info.data[0].sprites.front_default} alt="img" className={styles.img}/>
                                </div>
                            </div>                        
                            <div className={styles.filteredPokemonTypesDiv}>
                                <h5 className={styles.titleTypes}>Types:</h5>
                                <div className={styles.filteredPokemonTypesContainer}>
                                    {
                                    info.data[0].types.map(t => 
                                        {return (
                                            <div className={styles.typeContainer}>
                                                <p key={t.type.name}>{capitalize(t.type.name)}</p> 
                                                {findIcon(t.type.name)}
                                            </div>
                                        );}
                                    )
                                    }
                                </div>
                            </div>
                        </div>    
                        </>
                        :
                        <>
                            <div className={styles.titleDiv}>
                                <Link to={`/pokemons/${name}`} onClick={() => pokemonDataToStore()} className={styles.title} >
                                    {capitalize(name)}
                                </Link>
                            </div>
                            <div className={styles.imgDiv}>
                                <img src={info.data[0].sprites.front_default} alt="img" className={styles.img}/>
                            </div>
                            <div className={styles.typesDiv}>
                                <h5 className={styles.titleTypes}>Types:</h5>
                                <div className={styles.typesContainer}>
                                    {
                                    info.data[0].types.map(t => 
                                        {return (
                                            <div className={styles.typeContainer}>
                                                <p key={t.type.name}>{capitalize(t.type.name)}</p> 
                                                {findIcon(t.type.name)}
                                            </div>
                                        );}
                                    )
                                    }
                                </div>
                            </div>
                        </>
                    :
                    <h6>Loading data...</h6>                    
            }
        </div>
        );
}