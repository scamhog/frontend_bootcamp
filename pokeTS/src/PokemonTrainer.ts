import { Pokemon } from "./Pokemon";
import { Type } from "./Types";
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
        const results = await Promise.all(listPokemons)
        results.forEach(result => {
            this.pokemons.push(new Pokemon(result.data));
        });
    }

    async showTeam() {
        await this.getPokemons();
        console.log('Trainer:', this.name);
        this.pokemons.forEach(pokemon => {
            pokemon.displayInfo();
        });
    }
}