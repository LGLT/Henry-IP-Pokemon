import React, { useEffect, useState} from 'react';
import { useSelector} from 'react-redux'

import PaginationPokemons from './PaginationPokemons';
import PaginationChangePage from './PaginationChangePage';


export default function Pagination () {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);

    const filterByType = useSelector(store => store.filterByType);

    const pokemonsfromStore = useSelector(store => store.allStorePokemons);
    
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = (filter) => {
        if(pokemonsfromStore) { 
            if(filter){
                let filteredPokemons = [];
                if(filter === "created"){
                    pokemonsfromStore[0].forEach( p => p.info ? 0 : filteredPokemons.push(p))
                    return filteredPokemons;
                }
                if(filter === "strongest"){
                    filteredPokemons = pokemonsfromStore[0].slice(0);
                    filteredPokemons.sort((a, b) => {
                        let powerA = a.info ? a.info.data[0].stats[1].base_stat : parseInt(a.fuerza);
                        let powerB = b.info ? b.info.data[0].stats[1].base_stat : parseInt(b.fuerza);

                        if (powerA < powerB) return 1;
                        if (powerA > powerB) return -1;
                        return 0;
                    })
                    
                    return filteredPokemons;
                }
                if(filter === "name"){
                    filteredPokemons = pokemonsfromStore[0].slice(0);
                    filteredPokemons.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        return 0;
                    })
                    return filteredPokemons;
                }
                pokemonsfromStore[0].forEach( p => {
                    // console.log(p)
                    if(p.url) p.info.data[0].types.forEach( t => t.type.name === filter ?  filteredPokemons.push(p) : 0 )
                })
                return filteredPokemons;
            }
            // pokemonsfromStore[0].slice(indexOfFirstPokemon, indexOfLastPokemon).map(p => p.info ? console.log(p.info) : console.log(10))
            return pokemonsfromStore[0].slice(indexOfFirstPokemon, indexOfLastPokemon)
        }
    } 
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {

    },[filterByType])

    return (
        <div>
            {
               filterByType
                ?
                <div>
                    <PaginationPokemons currentPokemons={currentPokemons(filterByType).slice(indexOfFirstPokemon, indexOfLastPokemon)} />
                    <PaginationChangePage 
                        pokemonsPerPage={pokemonsPerPage} 
                        totalPokemons={currentPokemons(filterByType).length} 
                        paginate={paginate}
                    />   
                </div>
                :
                <div>
                    <PaginationPokemons currentPokemons={currentPokemons()} />
                    <PaginationChangePage 
                        pokemonsPerPage={pokemonsPerPage} 
                        totalPokemons={pokemonsfromStore[0].length} 
                        paginate={paginate}
                    />   
                </div>
            }    
        </div>
    );
}