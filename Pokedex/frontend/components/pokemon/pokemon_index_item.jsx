import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component{
  constructor(props){
    super(props)
    // debugger
  }
  render() {
    let poke = this.props.poke;

    return (
      <Link to={`/pokemon/${poke.id}`}>
        <li>#{poke.id} - {poke.name} <img className={'pokedex-image'} src={poke.image_url}/></li>
      </Link>
    );
  };
}

export default PokemonIndexItem;
