import { IPokemonTrainer } from "./interfaces/IPokemonTrainer";
import { Pokemon } from "./Pokemon";
import { PokemonDisplayer } from "./PokemonDosplayer";
import { getSinglePokemon } from "./utils";

export class PokemonTrainer implements IPokemonTrainer {
    name: string;
    pokemons: Pokemon[] = [];
    listOfIds: number[] = [120, 230];

    constructor(name: string) {
        this.name = name;
    }

    async getPokemons() {
        const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
        const results = await Promise.all(listPokemons);
        await Promise.all(results.map(async result => {
            let newPokemon: Pokemon = new Pokemon(result.data);
            this.pokemons.push(newPokemon);
            await newPokemon.buildMoves(result.data);
        }));
    }

    async showTeam() {
        await this.getPokemons();
        console.log('Trainer:', this.name);
        this.pokemons.forEach(pokemon => {
            PokemonDisplayer.displayInfo(pokemon);
        });
    }
}