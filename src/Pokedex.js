import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({pokemon}) => {

    return(
       
        <div className='pokedex-container'>

        {pokemon.map(p=> ( <div className='pokecard'> <Pokecard key = {p.id} id= {p.id} species = {p.species}
        type = {p.type} base_experience = {p.base_experience}></Pokecard></div>
        ))}

        </div>
        

    )


}

export default Pokedex;