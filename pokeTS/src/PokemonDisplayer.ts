import { Pokemon } from "./Pokemon";

export abstract class PokemonDisplayer {

    static displayInfo(pokemon: Pokemon) {
        console.log(`==========================`);
        console.log(`id: ${pokemon.id} - name: ${pokemon.name}`);
        console.log('types:');
        pokemon.types.forEach(type => {
            console.log(`   * ${type.name}`);
        });
        console.log('moves:');
        pokemon.moves.map(move => {
            console.log(`   * ${move.name}`);
        });
    }
}