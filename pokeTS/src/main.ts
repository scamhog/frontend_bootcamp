import Pokedex from "./Pokedex";
import { PokemonTrainer } from  "./PokemonTrainer";
import { getMoveDetails } from "./utils";

const pokemonMaster = new PokemonTrainer("Misty");
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