import React, {useEffect, useState} from 'react';
import axios from 'axios'
import PaginationPokemons from './PaginationPokemons';
import PaginationChangePage from './PaginationChangePage';

import {useDispatch, useSelector} from 'react-redux'
import { addAllPokemonsToStore } from '../../redux/actions';

export default function Pokemons(){
    const [allPokemons, setAllPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(10);

    //  Hook para el dispatch
    const dispatch = useDispatch()
    //  Hooks para obtener los valores de la store
    const pokemonsfromStore = useSelector(store => store.allStorePokemons);
    const loadStorePokemons = useSelector(store => store.loadStorePokemons);

    useEffect(() => {
        const getPokemons = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3001/pokemons');
            dispatch(addAllPokemonsToStore(response.data))
            setLoading(false);
        }
        getPokemons();
    }, []);


    // Get current posts
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemonsfromStore.slice(indexOfFirstPokemon, indexOfLastPokemon)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    if(loading){
        return(
            <div>Loading...</div>
        );
    }
    else {
        return(
            <div>
                <PaginationPokemons currentPokemons={currentPokemons} loading={loading} />
                <PaginationChangePage 
                    pokemonsPerPage={pokemonsPerPage} 
                    totalPokemons={pokemonsfromStore.length} 
                    paginate={paginate}
                />
            </div>
        );
    }
}