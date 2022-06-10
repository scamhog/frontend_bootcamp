"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PokemonTrainer_1 = require("./PokemonTrainer");
var pokemonMaster = new PokemonTrainer_1.PokemonTrainer("Misty");
pokemonMaster.showTeam();
// pokemonMaster.getPokemonFullInfoFromPokedex(10);
// Pokedex.getPokemonTypes(45);
// getMoveDetails("https://pokeapi.co/api/v2/move/14/").then((res)=>{
//     console.log(res.data);
//     console.log("name: " + res.data.name);
//     console.log("accuracy: " + res.data.accuracy);
//     console.log("powerPoints: " + res.data.pp);
//     console.log("type: ");
//     console.log(res.data.type);
//     console.log("damage: " + res.data.power);
// })
