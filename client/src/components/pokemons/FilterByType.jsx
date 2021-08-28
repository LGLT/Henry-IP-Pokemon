import React, { useState} from 'react';

import {useDispatch, useSelector} from 'react-redux'

import { addFilterType } from '../../redux/actions';

import styles from './styles/FilterByType.module.css'

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
        <div className={styles.mainDiv}>
            <form onSubmit={functionFilterBy}>
                <select onChange={functionFilterBy} name="filterBy" id="filterBy" className={styles.select}>
                    <option hidden selected>Filter options</option>
                    <option value="none">None</option>
                    <option value="created">Created Pokemon</option>
                    <option value="name">Name (ASC)</option>
                    <option value="nameDes">Name (DES)</option>
                    <option value="strongest">Strongest (ASC)</option>
                    <option value="strongestDes">Strongest (DES)</option>
                    <option value="normal">Type: normal</option>
                    <option value="fighting">Type: fighting</option>
                    <option value="flying">Type: flying</option>
                    <option value="poison">Type: poison</option>
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
            </form>
        </div>
    );
}