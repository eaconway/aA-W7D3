import React from 'react';
import {connect} from 'react-redux';
import {createSinglePokemon} from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = dispatch => ({
  createSinglePokemon: (pokemon) => dispatch(createSinglePokemon(pokemon))
});

export default connect(null, mapDispatchToProps)(PokemonForm);
