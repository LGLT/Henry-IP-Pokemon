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
                        <li onClick={() => paginate(number)} key={number} className={styles.li}>
                            <a href="#0" style={{textDecoration: "none"}}>{number}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}