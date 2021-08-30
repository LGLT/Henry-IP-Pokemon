import React from 'react';
import Pokeball from './Pokeball';
import {Link} from 'react-router-dom';

import styles from './stylesComponents/Home.module.css'

export default function Home(){
    return(
        <div className={styles.div}>
            <div className={styles.divTitle}>
                <h1>Inside a Pokeball</h1>
            </div>
            <Link to='/pokemons'><Pokeball /></Link>
        </div>
    )
}