import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemons/pokemon-list/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonService } from './pokemons/service/pokemon.service';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './core/components/search-bar/search-bar.component';
import { PokeInfoDetailComponent } from './pokemons/poke-info-detail/poke-info-detail.component';
import { PaginatorComponent } from './core/components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonListComponent,
    NavbarComponent,
    SearchBarComponent,
    PokeInfoDetailComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
