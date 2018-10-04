@pokemon.each do |poke|
  json.partial! 'pokemon', poke: poke
end
