import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {

  constructor(private readonly pokemonService: PokemonService) {}
  /**
   * returns all pokemons as a array
   */
  get pokemons(): any[] {
    return this.pokemonService.pokemons();
  }
  /**
   * returns all caught pokemons as an array
   */
  get caughtPokemons(): any[] {
    if (localStorage.getItem("pokemons")) {
      return localStorage.getItem("pokemons")!.split(",");
    }
    return [];
  }
  /**
   * Catches a pokemons and adds it to the caught pokemons
   * @param pokemon the pokemon that is caught
   */
  catchPokemon(pokemon: string): void {
    if (localStorage.getItem("pokemons")) {
      localStorage.setItem('pokemons', localStorage.getItem("pokemons") + "," + pokemon);
    } else {
      localStorage.setItem('pokemons', pokemon);
    }

    alert("Well done! You successfully catched " + pokemon.charAt(0).toUpperCase() + pokemon.substring(1) + "!")
  }
}
