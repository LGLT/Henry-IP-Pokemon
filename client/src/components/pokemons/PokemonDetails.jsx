import React from 'react';

import { useSelector } from 'react-redux';

export default function PokemonDetails(){
    const pokemonData = useSelector(store => store.actualPokemonData);

    return(
        <div>
            {console.log(pokemonData)}
            <h2>{pokemonData[0].name}</h2>
            <img src={pokemonData[0].sprites.front_default} alt="img" />
        </div>
    );
}