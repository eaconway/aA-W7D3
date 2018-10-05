import React from 'react';

class PokemonDetail extends React.Component {
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
    this.props.createSinglePokemon(this.state);
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
            <option value="">Select car:</option>
            <option value="Fire">Fire</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
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

export default PokemonDetail;
