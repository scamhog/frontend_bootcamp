import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/utils/types';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  private offset: number = 0;
  private limit: number = 50;
  pokesPPage: number = 50;

  pokemons: any[] = [];
  pokemonsAux: any[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    const suscription = this.pokemonService
      .getPokemonsList(this.offset, this.limit)
      .subscribe((data: { results: Pokemon[] }) => {
        this.pokemons = [...this.pokemons, ...data.results];
        this.pokemonsAux = this.pokemons.slice(0, this.pokesPPage);
        suscription.unsubscribe();
        console.log('reload get pokemons');
      });
    this.offset += this.limit;
  }

  updateList(event: Pokemon[]) {
    this.pokemonsAux = event;
  }

  changeLimit(event: any) {
    this.pokesPPage = event;
  }
}
