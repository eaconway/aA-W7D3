json.set! poke.id do
  # json.id poke.id
  # json.name poke.name
  # json.image_url poke.image_url
  json.extract! poke, :id, :name
  json.image_url asset_path(poke.image_url)
end
