import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeInfoDetailComponent } from './pokemons/poke-info-detail/poke-info-detail.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'pokedex', component: PokemonListComponent },
  { path: 'pokedex/:id', component: PokeInfoDetailComponent },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
