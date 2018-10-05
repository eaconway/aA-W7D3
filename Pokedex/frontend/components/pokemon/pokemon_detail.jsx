import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';
import { Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    setTimeout(this.props.requestSinglePokemon(this.props.match.params.id), 10000);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.id != this.props.match.params.id){
      this.props.requestSinglePokemon(newProps.match.params.id);
    }
  }

  render(){
    const pokemon = this.props.pokemon;
    const items = this.props.items.map(item =>
      <Link key={item.id} to={`/pokemon/${pokemon.id}/item/${item.id}`}>
        <img className={'item'}src={item.image_url} />
      </Link> );

    if (pokemon === undefined){

      return (
        <div className={'pokemon-detail'}>
          <h1>Loading</h1>
        </div>
      )
    } else {
      return (
        <div className={'pokemon-detail'}>
          <h1>Render a pokemon</h1>
          <img className={'item-image'} src={`${pokemon.image_url}`}></img>
          <h1>{pokemon.name}</h1>
          <ul>
            <li>{pokemon.attack}</li>
            <li>{pokemon.defense}</li>
            <li>{pokemon.moves}</li>
          </ul>
          <div>
            {items}
          </div>
          <Route path="/pokemon/:id/item/:itemId" component={ItemDetailContainer} />
        </div>
      )
    }
  }
}

export default PokemonDetail;
// <Route path="/pokemon/:id/item/:itemId" component={ItemDetailContainer} />
// if (pokemon === undefined){
//   return (
//     <div>
//       <h1>Loading</h1>
//     </div>
//   )
// } else {
//   return (
//     <div>
//       <h1>Render a pokemon</h1>
//       <p>{items}</p>
//     </div>
//   )
// }
// }
