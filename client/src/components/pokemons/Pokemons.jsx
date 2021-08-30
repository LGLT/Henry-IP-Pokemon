import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

import styles from './styles/Pokemons.module.css'
import loadingGif from '../../img/loading.gif'

import {useDispatch, useSelector} from 'react-redux'
import { addAllPokemonsToStore, setLoadFilteredPokemonByName } from '../../redux/actions';
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import FilterByType from './FilterByType';
import FilterByName from './FilterByName';

export default function Pokemons(){
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

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
    }, [dispatch, loadStorePokemons]);
    

    if(loading){
        return(
        <div>
            <div className={styles.mainDivLoading}>
                <div className={styles.divLoadingGif}><img src={loadingGif} alt="" style={{width: "15%"}} /></div>
                <div className={styles.divLoading}>Loading data...</div>
            </div>
        </div>
        )
    }
    
    if(!loading){
        return(
            <div className={styles.mainDiv}>
            {/* {console.log(pokemonsfromStore[0])} */}
            <div className={styles.filteredPokemonAndFilters}>
                {
                    loadFilteredPokemonByName
                    ?
                    <div className={styles.filteredPokemon}> 
                    {
                        filteredPokemonByName[0].info 
                            ? <Pokemon key={filteredPokemonByName[0].id} name={filteredPokemonByName[0].name} id={filteredPokemonByName[0].id} info={filteredPokemonByName[0].info} filtered={filteredPokemonByName[0]}/> 
                            : <Pokemon key={filteredPokemonByName[0].id} name={filteredPokemonByName[0].name} id={filteredPokemonByName[0].id} localData={filteredPokemonByName[0]} filtered={filteredPokemonByName[0]}/>
                    }
                        <button onClick={() => dispatch(setLoadFilteredPokemonByName(false))} className={styles.filteredPokemonBtn}>X</button>
                    </div>
                    : 
                    <></> 
                }
                <div>
                    <div className={styles.filtersContainer}>
                        <Link to="/pokemons/createPokemon"><button className={styles.btnCreatePokemon}>Create Pokemon</button></Link>
                        <FilterByName /> 
                        <FilterByType />
                    </div>
                </div>
            </div>
                <Pagination />         
                <div style={{visibility: "hidden", marginTop:"0px"}}>
                    &nbsp;
                </div>
            </div>
        );
    }

}