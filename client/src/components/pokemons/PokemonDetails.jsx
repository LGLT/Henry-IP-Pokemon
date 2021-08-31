import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles/PokemonDetails.module.css'

export default function PokemonDetails(){
    const pokemonData = useSelector(store => store.actualPokemonData);

    const capitalize = (name) =>{
        let mayus = name.slice(0,1);
        name = name.slice(1,name.length);
        return mayus.toUpperCase().concat(name)
    }

    return(
        <div>
        {
            pokemonData[0][2]
            ?
            <div>
                <div className={styles.title}>
                    <h2>{capitalize(pokemonData[0][0])}</h2>
                </div>
                <img src={pokemonData[0][2].data[0].sprites.front_default} alt="img" className={styles.img} />
                <div className={styles.divStats}> 
                    <h3>Stats</h3>
                    <div className={styles.secondDivStats}>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Pokemon ID:</h4>
                            <p>{pokemonData[0][2].data[0].id}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Health Points (HP):</h4>
                            <p>{pokemonData[0][2].data[0].stats[0].base_stat}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Attack:</h4>
                            <p>{pokemonData[0][2].data[0].stats[1].base_stat}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Defense:</h4>
                            <p>{pokemonData[0][2].data[0].stats[2].base_stat}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Speed:</h4>
                            <p>{pokemonData[0][2].data[0].stats[5].base_stat}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Height:</h4>
                            <p>{pokemonData[0][2].data[0].height}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Weight:</h4>
                            <p>{pokemonData[0][2].data[0].weight}</p>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div>
                {/* {console.log(pokemonData)} */}
                <div className={styles.title}>
                    <h2>{capitalize(pokemonData[0].name)}</h2>
                </div>
                {/* <img src={pokemonData[0].sprites.front_default} alt="img" /> */}
                <div className={styles.divStats}> 
                    <h3>Stats</h3>
                    <div className={styles.secondDivStats}>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Pokemon ID:</h4>
                            <p>{pokemonData[0].id}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Health Points (HP):</h4>
                            <p>{pokemonData[0].hp}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Attack:</h4>
                            <p>{pokemonData[0].attack}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Defense:</h4>
                            <p>{pokemonData[0].defense}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Speed:</h4>
                            <p>{pokemonData[0].speed}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>Height:</h4>
                            <p>{pokemonData[0].height}</p>
                        </div>
                        <div className={styles.stat}>
                            <h4 style={{fontWeight: "400"}}>weight:</h4>
                            <p>{pokemonData[0].weight}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
    
        </div>
    );
}