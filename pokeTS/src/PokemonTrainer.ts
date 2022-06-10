import { Pokemon } from "./Pokemon";
import { getSinglePokemon } from "./utils";

export class PokemonTrainer {
    name: string;
    pokemons: Pokemon[] = [];
    listOfIds: number[] = [2, 4];

    constructor(name: string) {
        this.name = name;
    }

    async getPokemons() {
        const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
        const results = await Promise.all(listPokemons);
        await Promise.all(results.map(async result => {
            await this.pokemons.push(await new Pokemon(result.data));
        }));
    }

    async showTeam() {
        await this.getPokemons();
        console.log('Trainer:', this.name);
        this.pokemons.forEach(pokemon => {
            pokemon.displayInfo();
        });
    }
}