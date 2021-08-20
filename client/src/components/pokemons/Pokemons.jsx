import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import PaginationPokemons from './PaginationPokemons';
import PaginationChangePage from './PaginationChangePage';

import styles from './styles/Pokemons.module.css'

import {useDispatch, useSelector} from 'react-redux'
import { addAllPokemonsToStore } from '../../redux/actions';
import Pokemon from './Pokemon';

export default function Pokemons(){
    //  Variables exclusivas del componente
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);

    const [filterInput, setFilterInput] = useState("");
    const [filterInputActive, setFilterInputActive] = useState(false);
    const [filteredPokemon, setFilteredPokemon] = useState();

    //  Hook para el dispatch
    const dispatch = useDispatch()
    //  Hooks para obtener los valores de la store
    const pokemonsfromStore = useSelector(store => store.allStorePokemons);
    const loadStorePokemons = useSelector(store => store.loadStorePokemons);

    useEffect(() => {
        //  Si el store aún no tiene cargados los pokemons, se los pasamos.
        if(loadStorePokemons === false){
            const getPokemons = async () => {
                // setLoading(true);
                const response = await axios.get('http://localhost:3001/pokemons');
                dispatch(addAllPokemonsToStore(response.data));
                setLoading(false);
            }
            getPokemons();
        }
        //  Si el store ya cuenta con los pokemons cargados, seteamos el Loading en false.
        if(loadStorePokemons === true){
            setLoading(false)
        }
    }, [dispatch, loadStorePokemons]);

    // Proceso para calcular qué pokemons mostrar en la paginación
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = () => {
        if(pokemonsfromStore) { return pokemonsfromStore[0].slice(indexOfFirstPokemon, indexOfLastPokemon)}
        return 0
    } 
    
    // Funciones
    const paginate = (pageNumber) => setCurrentPage(pageNumber)         //  Cambiar página
    const handleSubmit = (event) => {                                   
        event.preventDefault();
        if(event.type === "change"){                                    //  Guardar valor del input
            setFilterInput(event.target.value);
        }
        if(event.type === "submit"){                                    //  Encontrar pokemon filtrado
            pokemonsfromStore[0].map(p => { 
                if(p.name.toLowerCase() === filterInput.toLowerCase()){
                    setFilteredPokemon(p);
                    setFilterInputActive(true);
                }
            })   
        }
    }


    if(loading){
        return(<div>Loading...</div>);
    }
    
    if(!loading){
        return(
            <div>
                {
                    filterInputActive === true
                    ? 
                    <div className={styles.filteredPokemon}>
                        <Pokemon key={filteredPokemon.id} name={filteredPokemon.name} id={filteredPokemon.id}/>
                        <button onClick={() => setFilterInputActive(false)}>Turn</button>
                    </div>
                    : 
                    <div>
                        <Link to="/pokemons/createPokemon"><button>Create Pokemon</button></Link>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='Pokemon name' onChange={handleSubmit} />
                            <button onSubmit={handleSubmit}>Search</button>
                        </form>
                    </div>
                    <PaginationPokemons currentPokemons={currentPokemons()} loading={loading} />
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

}