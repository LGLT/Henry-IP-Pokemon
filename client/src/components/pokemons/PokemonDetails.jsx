import React from 'react';

import { useSelector } from 'react-redux';

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
            <div>{console.log(pokemonData)}
                <h2>{capitalize(pokemonData[0][0])}</h2>
                <img src={pokemonData[0][2].data[0].sprites.front_default} alt="img" />
                <div> 
                    <h3>Stats</h3>
                    <div>
                    <h4>Pokemon ID:</h4>
                    <p>{pokemonData[0][2].data[0].id}</p>
                    <h4>Health Points (HP):</h4>
                    <p>{pokemonData[0][2].data[0].stats[0].base_stat}</p>
                    <h4>Attack:</h4>
                    <p>{pokemonData[0][2].data[0].stats[1].base_stat}</p>
                    <h4>Defense:</h4>
                    <p>{pokemonData[0][2].data[0].stats[2].base_stat}</p>
                    <h4>Speed:</h4>
                    <p>{pokemonData[0][2].data[0].stats[5].base_stat}</p>
                    <h4>Height:</h4>
                    <p>{pokemonData[0][2].data[0].height}</p>
                    <h4>weight:</h4>
                    <p>{pokemonData[0][2].data[0].weight}</p>
                    </div>
                </div>
            </div>
            :
            <div>
                {console.log(pokemonData)}
                <h2>{capitalize(pokemonData[0].name)}</h2>
                {/* <img src={pokemonData[0].sprites.front_default} alt="img" /> */}
                <div> 
                    <h3>Stats</h3>
                    <div>
                    <h4>Pokemon ID:</h4>
                    <p>{pokemonData[0].id}</p>
                    <h4>Health Points (HP):</h4>
                    <p>{pokemonData[0].hp}</p>
                    <h4>Attack:</h4>
                    <p>{pokemonData[0].attack}</p>
                    <h4>Defense:</h4>
                    <p>{pokemonData[0].defense}</p>
                    <h4>Speed:</h4>
                    <p>{pokemonData[0].speed}</p>
                    <h4>Height:</h4>
                    <p>{pokemonData[0].height}</p>
                    <h4>weight:</h4>
                    <p>{pokemonData[0].weight}</p>
                    </div>
                </div>
            </div>
        }
    
        </div>
    );
}