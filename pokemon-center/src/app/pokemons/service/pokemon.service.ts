import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Species } from 'src/app/utils/types';

const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
const baseImgUrl: string =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail';
const baseUrlSpecies: string = 'https://pokeapi.co/api/v2/pokemon-species';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonsList(offset: number, limit: number) {
    return this.http.get(
      `${baseUrl}?offset=${offset}&limit=${limit}`
    ) as Observable<{ results: Pokemon[] }>;
  }

  getPokemonData(url: string) {
    return this.http.get(url) as Observable<Pokemon>;
  }

  getPokemonDataById(id: number) {
    return this.http.get(`${baseUrl}${id}`) as Observable<Pokemon>;
  }

  getPokemonSpecies(id: number) {
    return this.http.get(`${baseUrlSpecies}/${id}`) as Observable<Species>;
  }

  getPokemonImage(idPokemon: number) {
    const imageId = ('00' + idPokemon).slice(-3);
    return `${baseImgUrl}/${imageId}.png`;
  }
}
