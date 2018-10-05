class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save!
      redirect_to api_pokemon_url(@pokemon.id)
    else
      render json: "Didn't work"
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:attack, :defense, :image_url, :name, :poke_type)
  end
end
