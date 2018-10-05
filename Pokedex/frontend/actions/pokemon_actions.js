import * as APIUtil from '../util/api_util.js'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const RECEIVE_NEW_POKEMON = 'RECEIVE_NEW_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = (payload) => ({
  type: RECEIVE_SINGLE_POKEMON,
  payload
});

export const receiveNewPokemon = (payload) => ({
  type: RECEIVE_NEW_POKEMON,
  payload
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => {
  return (
    APIUtil.fetchPokemon(id)
      .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
  );
};

export const createSinglePokemon = (pokemon) => (dispatch) => {
  return (
    APIUtil.createPokemon(pokemon)
      .then(newPokemon => {
        dispatch(receiveSinglePokemon(newPokemon))
        return pokemon;
      })
  );
};
