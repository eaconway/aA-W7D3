import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/" component={PokemonIndexContainer} />
  </div>
);

export default App;
