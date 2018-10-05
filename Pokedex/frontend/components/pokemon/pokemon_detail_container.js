import React from 'react';
import {connect} from 'react-redux';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import {selectAllItems} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail'

const mapStateToProps = (state, ownProps) => {
  return {
  pokemon: state.entities.pokemon[ownProps.match.params.id],
  items: selectAllItems(state)
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
