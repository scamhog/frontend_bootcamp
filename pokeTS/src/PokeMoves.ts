import { Move } from "./Types";
import { getMoveDetails } from "./utils";

export abstract class PokeMoves {
    static getPokeMoveDetails(url: string) {
        return getMoveDetails(url);
    }

    static proccesPokeMove(moveDetails: any) {
        let moveDetailed: Move;
        return moveDetailed = {
            name: moveDetails.name,
            accuracy: moveDetails.accuracy,
            powerPoints: moveDetails.pp,
            type: moveDetails.type,
            url: moveDetails.url
        }
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