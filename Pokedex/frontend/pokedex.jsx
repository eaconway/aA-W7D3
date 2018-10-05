import React from 'react';
import ReactDOM from 'react-dom';
import * as PokemonAPIUtil from './util/api_util';
import {receiveAllPokemon, requestAllPokemon, requestSinglePokemon} from './actions/pokemon_actions.js';
import configureStore from './store/store';
import Root from './components/root';
import {selectAllPokemon} from './reducers/selectors.js';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore({});
  ReactDOM.render(<Root store={store} />, root);

  window.fetchAllPokemon = PokemonAPIUtil.fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchPokemon = PokemonAPIUtil.fetchPokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.createPokemon = PokemonAPIUtil.createPokemon;
});
