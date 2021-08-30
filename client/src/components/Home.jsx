import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/pokemonHenryApp.png';
import pokeball from '../img/pokeball.png'

import styles from './stylesComponents/Home.module.css'

export default function Home(){
    return(
        <div className={styles.div}>
            <div className={styles.divLogo}><img src={logo} alt="PHA_logo" /></div>
            <Link to='/pokemons'><div className={styles.divPokeball}><img src={pokeball} alt="pokeball" style={{width: "15%"}} /></div></Link>
        </div>
    )
}