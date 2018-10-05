import React from 'react';
import {connect} from 'react-redux';
// import {requestSinglePokemon} from '../../actions/pokemon_actions';
// import {selectAllPokemon} from '../../reducers/selectors';
import ItemDetail from './item_detail.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.entities.items[ownProps.match.params.itemId]
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
