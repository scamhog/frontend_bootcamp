import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/utils/types';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  @Input()
  searchQuery: string = '';
  private offset: number = 0;
  private limit: number = 50;
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
        this.pokemonsAux = [...this.pokemons, ...data.results];
        suscription.unsubscribe();
        console.log(this.pokemons.length);
      });
    this.offset += this.limit;
  }

  updateList(event: Pokemon[]) {
    this.pokemonsAux = event;
  }

  getNextBatch(event: any) {
    console.log(event);
    // if (event == this.scrollCounter) {
    //   this.getPokemons();
    //   this.scrollCounter += 5;
    // }
  }
}
