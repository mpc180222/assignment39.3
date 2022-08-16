import React from 'react';

import './Pokecard.css';

const Pokecard = ({id, species, type, base_experience}) => (
    
    <div className='pokecard-container'><h3>{species}</h3>
    <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/> 
        <p>Type:{type}</p><p>EXP:{base_experience}</p></div>

)

export default Pokecard;