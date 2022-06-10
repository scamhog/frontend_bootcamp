import { Move } from "./Types";
import { getMoveDetails } from "./utils";

export abstract class PokeMoves{
    static async getPokeMoveDetails(url: string) {
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

    static getMovesRandom(pokeData: any) {
        let allmoves: any[] = pokeData.moves;
        const movesRandom: any[] = [];
        const MAX_MOVES = 4;
        let randomNum: number = Math.floor(Math.random() * allmoves.length);
        for (let index = 0; index < MAX_MOVES; index++) {
            movesRandom.push(allmoves[randomNum]);
            randomNum = Math.floor(Math.random() * allmoves.length);
        }
        return movesRandom;
    }
}