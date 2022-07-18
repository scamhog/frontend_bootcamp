import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.sass'],
})
export class AddPokemonComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({
    pokemonName: new FormControl(''),
    pokemonDescription: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submit');
  }
}
