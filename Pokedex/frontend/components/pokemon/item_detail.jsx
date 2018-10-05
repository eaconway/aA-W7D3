import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let item = this.props.item;
    return (
      <div>
        <h1>{item.name}</h1>
        <h3>Happiness: {item.happiness}</h3>
        <h3>Price: {item.price}</h3>
      </div>
    )
  }
};

export default ItemDetail;
