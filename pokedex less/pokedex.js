const Http = new XMLHttpRequest();

function loadPokemons() {
    for (let index = 0; index < dataPokemons.results.length; index++) {
        let url = dataPokemons.results[index].url;
        let color = pokemonColorMap[index + 1];
        let pokedata = getPokeData(url, color);
        loadPokeCard(pokedata);
    }
}

function getPokeData(url, color) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    let data = JSON.parse(xmlHttp.responseText);
    let pokemo = new Pokedata(data.name, color, data.sprites.front_default);
    return pokemo;
}

class Pokedata {
    constructor(name, color, image) {
        this.name = name;
        this.color = color;
        this.sprite = image;
    }
}

function loadPokeCard(pokemon) {
    document.getElementById('pokedex').innerHTML += `<card-basic pokename="${pokemon.name}"
    sprite="${pokemon.sprite}" cardcolor="${pokemon.color}"></card-basic>`;
}