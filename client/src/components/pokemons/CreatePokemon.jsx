import React from 'react';

export default function CreatePokemon () {
    return (
        <div>
            <form method="POST" action="http://localhost:3001/pokemons/create">
                <div>
                    <label for="Nombre">Nombre</label>
                    <input name="nombre" type="text" />
                </div>
                <div>
                    <label for="Vida">Vida</label>
                    <input name="vida" type="text" />
                </div>
                <div>
                    <label for="Fuerza">Fuerza</label>
                    <input name="fuerza" type="text" />
                </div>
                <div>
                    <label for="Defensa">Defensa</label>
                    <input name="defensa" type="text" />
                </div>
                <div>
                    <label for="Velocidad">Velocidad</label>
                    <input name="velocidad" type="text" />
                </div>
                <div>
                    <label for="Altura">Altura</label>
                    <input name="altura" type="text" />
                </div>
                <div>
                    <label for="Peso">Peso</label>
                    <input name="peso" type="text" />
                </div>
                <div>
                    <label for="Tipo">Tipo</label>
                    <input name="tipo" type="text" />
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
}