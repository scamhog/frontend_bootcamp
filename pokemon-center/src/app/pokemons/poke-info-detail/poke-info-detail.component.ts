import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-poke-info-detail',
  templateUrl: './poke-info-detail.component.html',
  styleUrls: ['./poke-info-detail.component.sass'],
})
export class PokeInfoDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: LocationStrategy
  ) {}

  pokemonId: string = '';
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      console.log(params['id']);
    });
    this.pokemonId = this.route.snapshot.paramMap.get('id') || '0';
  }

  goback() {
    this.location.back();
  }
}
