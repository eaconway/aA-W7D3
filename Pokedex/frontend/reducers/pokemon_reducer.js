import {RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON} from './../actions/pokemon_actions.js';
import merge from "lodash/merge";

export default (state = {}, action) => {
  const newState = merge({}, state);

  // debugger
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      // debugger
      return merge(action.pokemon, state);
    case RECEIVE_SINGLE_POKEMON:
    // debugger
      let pokemon = action.payload.pokemon;
      newState[pokemon.id] = pokemon;
      return newState;
    // case RECEIVE_NEW_POKEMON:
    //   let pokemon = action.payload.pokemon;
    //   newState[pokemon.id] = pokemon;
    //   return newState;
    default:
      return state;
  }
}
