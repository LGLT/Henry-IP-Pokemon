import React from 'react';
import styles from './stylesComponents/Menu.module.css'
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.divContainers}>
                <section>
                    <div>
                        <h1>Historial de Pokemon</h1>
                        <p>Conoce todos a todos los pokemon que se alojan aquí dentro.</p>
                        <Link to='/pokemons'><button>Button</button></Link>
                    </div>
                </section>
                <section>
                    <div>
                        <h1>Sección 1</h1>
                    </div>
                </section>
                <section>
                    <div>
                        <h1>Sección 2</h1>
                    </div>
                </section>
            </div>
            {/* <section>
                <p>
                    ¡Bienvenido! Esta es la Smart Ball, un tipo de Pokeball única en el mundo, la única de su clase. 
                    Se trata de una herramienta capaz de almacenar infinitos pokemons, gracias a la sofisticada 
                    tecnología utilizada para su elaboración. En este momento, tienes la oportunidad de explorar 
                    su contenido, gracias a que un grupo de científicos e ingenieros han sido capaces de conectarla 
                    a la web, para facilitar el acceso a todo el mundo a la Poke información.
                </p>
            </section> */}
        </div>
    );
}