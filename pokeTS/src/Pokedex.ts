import { Type } from "./Types";
import { getSinglePokemon } from "./utils";

export default abstract class Pokedex{
    static async getPokemonFullInfox(id: number) {
        await getSinglePokemon(id).then((response) => {
            const pokedata = response.data
            console.log(pokedata);
        });
    }

    static async getPokemonTypes(id: number) {
        await getSinglePokemon(id).then((response) => {
            const types: Type[] = []
            response.data.types.map(typeData => {
                types.push(typeData.type);
            });
            console.log(types);
        });
    }
}