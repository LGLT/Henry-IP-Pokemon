import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function Pokemon(props){
    //const {name, id} = props;
    const [pokemonData, setPokemonData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPokemonData = async () => {
            const response = await axios.get(`http://localhost:3001/pokemons/${props.id}`);
            setPokemonData(response.data);
            setLoading(false)
        }
        getPokemonData();
    },[])

    if(loading) return <h3>Loading</h3>

    return (
        <div>
            <Link to={`/pokemons/${props.name}`}>{props.name}</Link>
            <img src={pokemonData[0].sprites.front_default} alt="img" />
        </div>
    );
}