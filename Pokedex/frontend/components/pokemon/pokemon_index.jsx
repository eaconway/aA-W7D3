import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    const pokemonItems = this.props.pokemon.map(poke =>
      <PokemonIndexItem key={poke.id} poke={poke} />);

    return (
      <div className={'pokedex'}>
        <div className={'all-pokemon'}>
          <h1>Original Pokemon (most of them)</h1>
          <ul>
            {pokemonItems}
          </ul>
        </div>
        <Switch>
          <Route path="/pokemon/:id" component={PokemonDetailContainer} />
          <Route path="/" component={PokemonFormContainer} />
        </Switch>
      </div>
    )
  }
}

//ADD BACK LATER -  className={'pokemon-items'}

export default PokemonIndex;
