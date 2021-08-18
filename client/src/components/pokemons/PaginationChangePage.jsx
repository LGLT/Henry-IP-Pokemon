import React from 'react';

import styles from './styles/PaginationChangePage.module.css'

export default function PaginationChangePage({pokemonsPerPage, totalPokemons, paginate}){
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPokemons / pokemonsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div>
            <nav>
                <ul className={styles.ul}>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href="#0">{number}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}