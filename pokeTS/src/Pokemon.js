"use strict";
/*List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokedex_1 = require("./Pokedex");
var utils_1 = require("./utils");
var Pokemon = /** @class */ (function () {
    function Pokemon(pokemonResult) {
        this.id = 0;
        this.name = '';
        this.moves = [];
        this.types = [];
        this.buildFieldsPokemon(pokemonResult);
    }
    Pokemon.prototype.buildFieldsPokemon = function (pokemon) {
        return __awaiter(this, void 0, void 0, function () {
            var aux;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.name = pokemon.name;
                        this.id = pokemon.id;
                        return [4 /*yield*/, this.getMovesRandom(pokemon.id)
                                .then(function (randMovesRes) { return __awaiter(_this, void 0, void 0, function () {
                                var randMoves, pokeMoves;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            aux = randMovesRes;
                                            randMoves = randMovesRes;
                                            pokeMoves = [];
                                            return [4 /*yield*/, Promise.all(randMoves.map(function (randMove) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, this.getPokeMoveDetails(randMove.move.url)
                                                                    .then(function (moveDetailedRes) {
                                                                    pokeMoves.push(moveDetailedRes);
                                                                })];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }))];
                                        case 1:
                                            _a.sent();
                                            this.moves = pokeMoves;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Pokemon.prototype.getMovesRandom = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Pokedex_1.default.getPokemonMoves(id)
                            .then(function (allmoves) {
                            var movesRandom = [];
                            var MAX_MOVES = 4;
                            var randomNum = Math.floor(Math.random() * allmoves.length);
                            for (var index = 0; index < MAX_MOVES; index++) {
                                movesRandom.push(allmoves[randomNum]);
                                randomNum = Math.floor(Math.random() * allmoves.length);
                            }
                            return movesRandom;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Pokemon.prototype.getPokeMoveDetails = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.getMoveDetails)(url)
                            .then(function (resDetails) {
                            var moveDetailed;
                            return moveDetailed = {
                                name: resDetails.data.name,
                                accuracy: resDetails.data.accuracy,
                                powerPoints: resDetails.data.pp,
                                type: resDetails.data.type,
                                url: url
                            };
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Pokemon.prototype.displayInfo = function () {
        console.log("==========================");
        console.log("".concat(this.id, " ").concat(this.name));
        console.log(this.types);
        this.types.forEach(function (type) {
            console.log("".concat(type.name));
        });
        this.moves.forEach(function (move) {
            console.log("".concat(move.name));
        });
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
