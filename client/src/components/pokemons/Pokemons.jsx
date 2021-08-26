import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

import styles from './styles/Pokemons.module.css'

import {useDispatch, useSelector} from 'react-redux'
import { addAllPokemonsToStore, setLoadFilteredPokemonByName } from '../../redux/actions';
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import FilterByType from './FilterByType';
import FilterByName from './FilterByName';

export default function Pokemons(){
    //  Variables exclusivas del componente
    const [loading, setLoading] = useState(true);
    //  Hook para el dispatch
    const dispatch = useDispatch()
    //  Hooks para obtener los valores de la store
    // const pokemonsfromStore = useSelector(store => store.allStorePokemons);
    const loadStorePokemons = useSelector(store => store.loadStorePokemons);
    const filteredPokemonByName = useSelector(store => store.filteredPokemonByName);
    const loadFilteredPokemonByName = useSelector(store => store.loadFilteredPokemonByName);

    useEffect(() => {
        axios.get('http://localhost:3001/types')
    },[])


    useEffect(() => {
        //  Si el store aún no tiene cargados los pokemons, se los pasamos.
        if(loadStorePokemons === false){
            const getPokemons = async () => {
                await axios.get('http://localhost:3001/pokemons')
                    // .then(async data => await data.data.slice(0,40))
                    .then(async data => await data.data.slice(0))
                    .then(async data => {
                        await data.map(async p => p.url ? p.info = await axios.get(`http://localhost:3001/pokemons/${p.id}`) : 0);
                        dispatch(addAllPokemonsToStore(data))
                    })
            }
            getPokemons();
        }
        //  Si el store ya cuenta con los pokemons cargados, seteamos el Loading en false.
        if(loadStorePokemons === true){
            setLoading(false)
        }
    }, [dispatch, loadStorePokemons, loadFilteredPokemonByName]);
    

    if(loading){
        return(<div>Loading...</div>);
    }
    
    if(!loading){
        return(
            <div>
            {/* {console.log(pokemonsfromStore[0])} */}
            {
                loadFilteredPokemonByName
                ?
                <div className={styles.filteredPokemon}>
                    <Pokemon key={filteredPokemonByName[0].id} name={filteredPokemonByName[0].name} id={filteredPokemonByName[0].id} info={filteredPokemonByName[0].info}/>
                    <button onClick={() => dispatch(setLoadFilteredPokemonByName(false))}>X</button>
                </div>
                : 
                <></> 
            }
                <div><Link to="/pokemons/createPokemon"><button>Create Pokemon</button></Link><div>
                <FilterByName /> 
                </div>
                    <FilterByType />
                    <Pagination /> 
                </div>
            </div>
        );
    }

}