import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { colorsPokemon } from 'src/app/utils/colors';
import { Pokemon } from 'src/app/utils/types';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  getPokemonData() {
    if (this.pokemon.url) {
      this.pokemonService.getPokemonData(this.pokemon.url).subscribe((data) => {
        let pokedata = data;
        if (data.id)
          pokedata.image = this.pokemonService.getPokemonImage(data.id);
        pokedata.name = this.pokemon.name;
        this.pokemon = pokedata;
      });
    }
  }

  getColor() {
    let expr = '#000';
    if (this.pokemon.id) expr = colorsPokemon[this.pokemon.id - 1];
    return expr;
  }

  goToDetails() {
    this.router.navigate(['pokedex', this.pokemon.id]);
  }
}
