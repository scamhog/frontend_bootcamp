import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/utils/types';

const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
const baseImgUrl: string =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail';

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

  getPokemonImage(idPokemon: number) {
    const imageId = ('00' + idPokemon).slice(-3);
    return `${baseImgUrl}/${imageId}.png`;
  }
}
