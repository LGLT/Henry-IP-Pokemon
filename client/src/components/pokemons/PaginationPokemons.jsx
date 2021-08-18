import React from 'react';
import Pokemon from './Pokemon';

export default function PaginationPokemons({currentPokemons, loading}){
    if(loading){
        return <h2>Loading...</h2>
    }
    
    return(
        <div>
            {currentPokemons.map(p => 
                (
                <Pokemon key={p.id} name={p.name} id={p.id} />
                )
            )}
        </div>
    );
}