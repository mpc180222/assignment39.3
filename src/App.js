import React from 'react';
import Pokedex from './Pokedex.js';
// import Pokecard from './Pokecard.css';
import pokemon from './pokemon';

function App() {
  return (
   <div className='pokedex-container'>

    <Pokedex pokemon = {pokemon}></Pokedex>

   </div>
  );
}

export default App;
