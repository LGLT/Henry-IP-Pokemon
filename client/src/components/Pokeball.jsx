import React from 'react';
import PokeballImg from '../img/pokeball.png'
import styles from './stylesComponents/Pokeball.module.css'

export default function Pokeball(){
    return(
        <div className={styles.div}>
            <img src={PokeballImg} alt="Pokeball" className={styles.pokeballImg} />
        </div>
    )
}