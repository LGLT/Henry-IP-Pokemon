import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/CreatePokemon.module.css'
import scientist from '../../img/scientist.png'

export default function CreatePokemon () {
    const [displayButton, setDisplayButton] = useState(false)
    const [formValues, setFormValues] = useState([])

    const saveValue = async (event) => {
        if(event.target.value === "") setFormValues([...formValues].filter(v => v !== event.target.name))
        else {
            let contains = formValues.find(n => n === event.target.name)
            if(!contains) setFormValues([...formValues, event.target.name])
        }
    }

    useEffect(() => {
        if(formValues.length === 8) return setDisplayButton(true);
        else return setDisplayButton(false);

    },[formValues, displayButton])

    return (
        <div className={styles.mainDiv}>
            <div> 
                <form method="POST" action="http://localhost:3001/pokemons" className={styles.form}>
                    <p>Enter the characteristics of your new Pokemon </p>
                    <div className={styles.formLabelAndInput}>
                        <label htmlFor="Name" className={styles.formLabel}>Name</label>
                        <input name="name" type="text" onChange={saveValue} className={styles.formInput}/>
                    </div>
                    <div className={styles.formLabelAndInput}>
                        <label htmlFor="HP" className={styles.formLabel}>HP</label>
                        <input name="hp" type="number" onChange={saveValue} className={styles.formInput}/>
                    </div>
                    <div className={styles.formLabelAndInput}>
                        <label htmlFor="Attack" className={styles.formLabel}>Attack</label>
                        <input name="attack" type="number" onChange={saveValue} className={styles.formInput}/>
                    </div>
                    <div className={styles.formLabelAndInput}>
                        <label htmlFor="Defense" className={styles.formLabel}>Defense</label>
                        <input name="defense" type="number" onChange={saveValue} className={styles.formInput}/>
                    </div>
                    <div className={styles.formLabelAndInput}>
                        <label htmlFor="Speed" className={styles.formLabel}>Speed</label>
                        <input name="speed" type="number" onChange={saveValue} className={styles.formInput}/>
                    </div>
                    <div className={styles.formLabelAndInput}>
                        <label htmlFor="Height" className={styles.formLabel}>Height</label>
                        <input name="height" type="number" onChange={saveValue} className={styles.formInput}/>
                    </div>
                    <div className={styles.formLabelAndInput}>
                        <label htmlFor="Weight" className={styles.formLabel}>Weight</label>
                        <input name="weight" type="number" onChange={saveValue} className={styles.formInput}/>
                    </div>
                    <div className={styles.formLabelAndInput}>
                        <label htmlFor="Type" className={styles.formLabel}>Type</label>
                        <select name="pokemonType" multiple onChange={saveValue} className={styles.formSelect}>
                            <option value="normal">normal</option>
                            <option value="fighting">fighting</option>
                            <option value="flying">flying</option>
                            <option value="poison">poison</option>
                            <option value="ground">ground</option>
                            <option value="rock">rock</option>
                            <option value="bug">bug</option>
                            <option value="ghost">ghost</option>
                            <option value="steel">steel</option>
                            <option value="fire">fire</option>
                            <option value="water">water</option>
                            <option value="grass">grass</option>
                            <option value="electric">electric</option>
                            <option value="psychic">psychic</option>
                            <option value="ice">ice</option>
                            <option value="dragon">dragon</option>
                            <option value="dark">dark</option>
                            <option value="fairy">fairy</option>
                        </select>
                    </div>
                    {displayButton ? <button type="submit" className={styles.formBtn} onClick={() => alert('Pokemon successfully created')}>CREATE</button> : <p className={styles.formBtnNotActive}>Finish entering the data.</p> }
                    <div><Link to="/pokemons"><button className={styles.btnBack}>Back</button></Link></div>
                </form>
                    <img src={scientist} alt="scientist" className={styles.imgScientist}/>
                </div>
            <div style={{visibility: "hidden", marginTop:"6px"}}>
             &nbsp;
            </div>
        </div>
    );
}
