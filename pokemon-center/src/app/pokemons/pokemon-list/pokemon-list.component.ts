import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/utils/types';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  private offset: number = 0;
  private limit: number = 100;
  pokemons: any[] = [];
  scrollCounter: number = 5;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    const suscription = this.pokemonService
      .getPokemonsList(this.offset, this.limit)
      .subscribe((data: { results: Pokemon[] }) => {
        this.pokemons = [...this.pokemons, ...data.results];
        suscription.unsubscribe();
        console.log(this.pokemons.length);
      });
    this.offset += this.limit;
  }

  getNextBatch(event: any) {
    console.log(event);
    // if (event == this.scrollCounter) {
    //   this.getPokemons();
    //   this.scrollCounter += 5;
    // }
  }
}
