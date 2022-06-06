/*List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/

import { Move, Type } from "./Types";

export class Pokemon {
    id: number = 0;
    name: string = '';
    moves: Move[] = [];
    types: Type[] = [];

    constructor(pokemonResult: Pokemon) {
        this.buildFieldsPokemon(pokemonResult);
    }

    buildFieldsPokemon(pokemon: Pokemon) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        // you can only choose four moves from the list of moves
        // this.moves = someFn(pokemon.moves);
    }

    displayInfo() {
        console.log(`==========================`);
        console.log(`${this.id} ${this.name}`);
        this.types.forEach(type => {
            console.log(`${type.name}`);
        });
        this.moves.forEach(move => {
            console.log(`${move.name}`);
        });
    }
}