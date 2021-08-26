import React, {useEffect, useState} from 'react';

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
        <div>
            <form method="POST" action="http://localhost:3001/pokemons">
                <div>
                    <label htmlFor="Name">Name</label>
                    <input name="name" type="text" onChange={saveValue}/>
                </div>
                <div>
                    <label htmlFor="HP">HP</label>
                    <input name="hp" type="number" onChange={saveValue}/>
                </div>
                <div>
                    <label htmlFor="Attack">Attack</label>
                    <input name="attack" type="number" onChange={saveValue}/>
                </div>
                <div>
                    <label htmlFor="Defense">Defense</label>
                    <input name="defense" type="number" onChange={saveValue}/>
                </div>
                <div>
                    <label htmlFor="Speed">Speed</label>
                    <input name="speed" type="number" onChange={saveValue}/>
                </div>
                <div>
                    <label htmlFor="Height">Height</label>
                    <input name="height" type="number" onChange={saveValue}/>
                </div>
                <div>
                    <label htmlFor="Weight">Weight</label>
                    <input name="weight" type="number" onChange={saveValue}/>
                </div>
                <div>
                    <label htmlFor="Type">Type</label>
                    <select name="pokemonType" multiple onChange={saveValue}>
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
                {displayButton ? <button type="submit">SUBMIT</button> : <p>Termine de rellenar los datos</p> }
            </form>
        </div>
    );
}