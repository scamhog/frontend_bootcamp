class Pokedata {
    constructor(name, color, image) {
        this.name = name;
        this.color = color;
        this.image = image;
    }
}

function loadPokeCard(pokemon) {
    document.getElementById('pokedex').innerHTML += `<card-basic pokename="${pokemon.name}"
    gif="${pokemon.image}" cardcolor="${pokemon.color}"></card-basic>`;
}

function loadPokemons() {
    for (let index = 0; index < dataPokemons.results.length; index++) {
        let url = dataPokemons.results[index].url;
        let color = pokemonColorMap[index + 1];
        let name = dataPokemons.results[index].name;
        let pokedata = new Pokedata(name, color, url);
        loadPokeCard(pokedata);
    }
}