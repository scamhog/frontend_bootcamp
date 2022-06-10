/*List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/

import Pokedex from "./Pokedex";
import { Move, Type } from "./Types";
import { getMoveDetails } from "./utils";

export class Pokemon {
    id: number = 0;
    name: string = '';
    moves: Move[] = [];
    types: Type[] = [];

    constructor(pokemonResult: Pokemon) {
        this.buildFieldsPokemon(pokemonResult);
    }

    async buildFieldsPokemon(pokemon: Pokemon) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        let aux;
        await this.getMovesRandom(pokemon.id)
            .then(async (randMovesRes) => {
                aux = randMovesRes;
                let randMoves: any[] = randMovesRes;
                let pokeMoves: Move[] = [];
                await Promise.all(
                    randMoves.map(async randMove => {
                        await this.getPokeMoveDetails(randMove.move.url)
                            .then((moveDetailedRes) => {
                                pokeMoves.push(moveDetailedRes);
                            });
                    }));
                this.moves = pokeMoves;
            });
    }

    async getMovesRandom(id: number) {
        return await Pokedex.getPokemonMoves(id)
            .then((allmoves) => {
                const movesRandom: any[] = [];
                const MAX_MOVES = 4;
                let randomNum: number = Math.floor(Math.random() * allmoves.length);
                for (let index = 0; index < MAX_MOVES; index++) {
                    movesRandom.push(allmoves[randomNum]);
                    randomNum = Math.floor(Math.random() * allmoves.length);
                }
                return movesRandom;
            });
    }

    async getPokeMoveDetails(url: string) {
        return await getMoveDetails(url)
            .then((resDetails) => {
                let moveDetailed: Move;
                return moveDetailed = {
                    name: resDetails.data.name,
                    accuracy: resDetails.data.accuracy,
                    powerPoints: resDetails.data.pp,
                    type: resDetails.data.type,
                    url: url
                }
            })
    }

    displayInfo() {
        console.log(`==========================`);
        console.log(`${this.id} ${this.name}`);
        console.log(this.types);
        this.types.forEach(type => {
            console.log(`${type.name}`);
        });
        this.moves.forEach(move => {
            console.log(`${move.name}`);
        });
    }
}