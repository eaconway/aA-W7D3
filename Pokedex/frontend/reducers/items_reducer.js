import {RECEIVE_SINGLE_POKEMON} from './../actions/pokemon_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.payload.items;
    default:
      return state;
  }
}
