import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    return (
      <div>
        <h1>Original Pokemon (most of them)</h1>
        <div className={'pokemon-items'}>
          {this.props.pokemon.map((poke,idx) => (
            <PokemonIndexItem key={idx} poke={poke}/>
          ))}
        </div>
      </div>
    )
  }
}

export default PokemonIndex;
