import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeInfoDetailComponent } from './pokemons/poke-info-detail/poke-info-detail.component';

const routes: Routes = [
  { path: 'poke-info', component: PokeInfoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
