import React from 'react';
import { withRouter } from 'react-router-dom';

const POKE_TYPES = [
  'fire',
  'electric',
  'normal',
  'ghost',
  'psychic',
  'water',
  'bug',
  'dragon',
  'grass',
  'fighting',
  'ice',
  'flying',
  'poison',
  'ground',
  'rock',
  'steel'
];

class PokemonForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attack: 0,
      defense: 0,
      imageUrl: '',
      name: '',
      pokeType: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key){
    return e => this.setState({ [key]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    debugger
    this.props.createSinglePokemon(this.state).then((newPokemon) => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
    });
  }

  render(){
    return (
      <div className={'pokemon-detail'}>
        <h1>Create a new pokemon!</h1>
        <label>Name:
          <input onChange={this.handleChange('name')}></input>
        </label>

        <label>Attack:
          <input onChange={this.handleChange('attack')}></input>
        </label>

        <label>Defense:
          <input onChange={this.handleChange('defense')}></input>
        </label>

        <label>Poke Type:
          <select onChange={this.handleChange('pokeType')}>
            <option value="">Select poke type:</option>
            {POKE_TYPES.map((type, i) => {
              return <option value={type} key={i}>{type}</option>
            })}
          </select>
        </label>

        <label>Image Url:
          <input onChange={this.handleChange('imageUrl')}></input>
        </label>

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default withRouter(PokemonForm);
