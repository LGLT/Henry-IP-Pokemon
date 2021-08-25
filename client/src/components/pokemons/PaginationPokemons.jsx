import React, {useEffect, useState} from 'react';
import Pokemon from './Pokemon';

import styles from './styles/PaginationPokemons.module.css'

export default function PaginationPokemons({currentPokemons}){
    // console.log(currentPokemons)
    return(
        <div className={styles.gridContainer}>
            {currentPokemons.map(p => 
                p.url 
                ?   <Pokemon key={p.id} name={p.name} id={p.id} info={p.info}/>
                :   <Pokemon key={p.id} name={p.name} id={p.id} localData={p}/>
                
            )}
        </div>
    );
}