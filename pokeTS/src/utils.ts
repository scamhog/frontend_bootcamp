import axios from "axios";

export function getSinglePokemon(id: string | number) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export function getMoveDetails(url: string) {
    return axios.get(url);
}