import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {

  }

  get pokemons(): any[] {
    return this.pokemonService.pokemons();
  }

  get caughtPokemons(): any[] {
    if (localStorage.getItem("pokemons")) {
      return localStorage.getItem("pokemons")!.split(",");
    }
    return [];
  }

  catchPokemon(pokemon: string): void {
    if (localStorage.getItem("pokemons")) {
      localStorage.setItem('pokemons', localStorage.getItem("pokemons") + "," + pokemon);
    } else {
      localStorage.setItem('pokemons', pokemon);
    }

    alert("Well done! You successfully catched " + pokemon.charAt(0).toUpperCase() + pokemon.substring(1) + "!")
  }
}
