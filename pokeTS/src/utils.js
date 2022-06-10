"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoveDetails = exports.getSinglePokemon = void 0;
var axios_1 = require("axios");
function getSinglePokemon(id) {
    return axios_1.default.get("https://pokeapi.co/api/v2/pokemon/".concat(id));
}
exports.getSinglePokemon = getSinglePokemon;
function getMoveDetails(url) {
    return axios_1.default.get(url);
}
exports.getMoveDetails = getMoveDetails;
