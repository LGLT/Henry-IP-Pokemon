import React, { useState} from 'react';

import {useDispatch, useSelector} from 'react-redux'

import { addFilterType } from '../../redux/actions';

export default function FilterByType() {
    const dispatch = useDispatch()
    const filterByType = useSelector(store => store.filterByType);

    const functionFilterBy = (event) => {
        event.preventDefault();
        if(event.target.value === "none") dispatch(addFilterType(""))
        else dispatch(addFilterType(event.target.value))
        return
    }
    
    
    return (
        <div>
            <form onSubmit={functionFilterBy}>
                <label>Filter by </label>
                <select onChange={functionFilterBy} name="filterBy" id="filterBy">
                    <option value="none">None</option>
                    <option value="created">Created Pokemon</option>
                    <option value="name">Name</option>
                    <option value="strongest">Strongest</option>
                    <option value="normal">Type: normal</option>
                    <option value="fighting">Type: fighting"</option>
                    <option value="flying">Type: flying"</option>
                    <option value="poison">Type: poison"</option>
                    <option value="ground">Type: ground</option>
                    <option value="rock">Type: rock</option>
                    <option value="bug">Type: bug</option>
                    <option value="ghost">Type: ghost</option>
                    <option value="steel">Type: steel</option>
                    <option value="fire">Type: fire</option>
                    <option value="water">Type: water</option>
                    <option value="grass">Type: grass</option>
                    <option value="electric">Type: electric</option>
                    <option value="psychic">Type: psychic</option>
                    <option value="ice">Type: ice</option>
                    <option value="dragon">Type: dragon</option>
                    <option value="dark">Type: dark</option>
                    <option value="fairy">Type: fairy</option>
                </select>
                <button onSubmit={functionFilterBy}>Filtrado</button>
            </form>
        </div>
    );
}