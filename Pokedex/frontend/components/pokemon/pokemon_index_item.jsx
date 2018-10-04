import React from 'react';

const PokemonIndexItem = ({poke}) => {
  return (
    <div>
      <li>#{poke.id} - {poke.name} <img src={poke.image_url}/></li>
    </div>
  );
};

export default PokemonIndexItem;
