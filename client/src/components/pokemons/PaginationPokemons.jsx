import React from 'react';
import Pokemon from './Pokemon';

import styles from './styles/PaginationPokemons.module.css'

export default function PaginationPokemons({currentPokemons, loading}){
    
    return(
        <div className={styles.gridContainer}>
            {currentPokemons.map(p => 
                {
                // console.log(p);
                if(p.url) return <Pokemon key={p.id} name={p.name} id={p.id} />
                return <Pokemon key={p.id} name={p.name} id={p.id} localData={p}/>
                }
                
            )}
        </div>
    );
}