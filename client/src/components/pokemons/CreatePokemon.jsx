import React from 'react';

export default function CreatePokemon () {
    return (
        <div>
            <form method="POST" action="http://localhost:3001/pokemons">
                <div>
                    <label htmlFor="Name">Name</label>
                    <input name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="Vida">Vida</label>
                    <input name="vida" type="text" />
                </div>
                <div>
                    <label htmlFor="Fuerza">Fuerza</label>
                    <input name="fuerza" type="text" />
                </div>
                <div>
                    <label htmlFor="Defensa">Defensa</label>
                    <input name="defensa" type="text" />
                </div>
                <div>
                    <label htmlFor="Velocidad">Velocidad</label>
                    <input name="velocidad" type="text" />
                </div>
                <div>
                    <label htmlFor="Altura">Altura</label>
                    <input name="altura" type="text" />
                </div>
                <div>
                    <label htmlFor="Peso">Peso</label>
                    <input name="peso" type="text" />
                </div>
                <div>
                    <label htmlFor="Tipo">Tipo</label>
                    <input name="tipo" type="text" />
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
}