import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../../utils/types';
import { stats } from 'src/app/core/components/grapher/grapher.component';

@Component({
  selector: 'app-poke-info-detail',
  templateUrl: './poke-info-detail.component.html',
  styleUrls: ['./poke-info-detail.component.sass'],
})
export class PokeInfoDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: LocationStrategy,
    private pokemonService: PokemonService
  ) {}

  pokemonId: string = '';
  pokemon: Pokemon = new Object() as Pokemon;
  description: string = '';

  stats: stats = {
    labels: [],
    values: [],
  };

  ngOnInit(): void {
    // this.pokemonId = this.route.snapshot.paramMap.get('id') || '0';
    this.route.params.forEach((params: Params) => {
      this.pokemon.id = params['id'];
    });
    this.getPokemonDataById();
    this.getPokemonSpecies();
  }

  getPokemonDataById() {
    if (this.pokemon.id) {
      let subs = this.pokemonService
        .getPokemonDataById(this.pokemon.id)
        .subscribe((pokedata) => {
          if (pokedata.id)
            pokedata.image = this.pokemonService.getPokemonImage(pokedata.id);
          this.pokemon = pokedata;
          subs.unsubscribe();
          if (this.pokemon.stats) {
            this.pokemon.stats.forEach((stat) => {
              this.stats.labels.push(stat.stat.name);
              this.stats.values.push(stat.base_stat);
            });
          }
        });
    }
  }

  getPokemonSpecies() {
    if (this.pokemon.id) {
      this.pokemonService
        .getPokemonSpecies(this.pokemon.id)
        .subscribe((species) => {
          species.flavor_text_entries
            .filter(
              (x, i, xs) =>
                x.language.name == 'es' &&
                xs.filter((z) => z.flavor_text == x.flavor_text).length <= 1
            )
            .forEach((desc) => (this.description += desc.flavor_text + ' '));
        });
    }
  }

  goback() {
    this.location.back();
  }
}
