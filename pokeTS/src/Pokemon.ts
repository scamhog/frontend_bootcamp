/*List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/
import { IPokemon } from "./interfaces/IPokemon";
import { PokeMoves } from "./PokeMoves";
import { Move, Type } from "./Types";

export class Pokemon implements IPokemon {
    id: number = 0;
    name: string = '';
    moves: Move[] = [];
    types: Type[] = [];

    constructor(pokemonResult: any) {
        this.buildFieldsPokemon(pokemonResult);
    }

    async buildFieldsPokemon(pokemon: any) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.setTypes(pokemon);
    }

    async buildMoves(pokeData: any) {
        let randMoves: any[] = PokeMoves.getMovesRandom(pokeData);
        const aux = await Promise.all(
            randMoves.map(
                randMove => PokeMoves.getPokeMoveDetails(randMove.move.url)
            )
        );
        aux.map(moveDetail => {
            this.moves.push(PokeMoves.proccesPokeMove(moveDetail.data));
        });
    }

    setTypes(pokeData: any) {
        let pokeTypes: any[] = pokeData.types;
        let types: Type[] = [];
        pokeTypes.map(async poketype => {
            types.push({ name: poketype.type.name, url: poketype.type.url });
        })
        this.types = types;
    }
}