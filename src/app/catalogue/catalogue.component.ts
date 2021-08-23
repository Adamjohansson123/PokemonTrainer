import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {

  constructor(private router: Router, private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    if(!localStorage.getItem("username")) {
      this.router.navigate(['/'])
    }

    this.pokemonService.fetchPokemons();
  }

  get pokemons(): any[] {
    return this.pokemonService.pokemons();
  }

  pokemonImage(name: string): string {
    return this.pokemonService.getPokemonByName(name);
  }

  catchPokemon(pokemon: string): void  {
    if(localStorage.getItem("pokemons")){
      localStorage.setItem('pokemons', localStorage.getItem("pokemons")+ ","+pokemon);
    }else{
      localStorage.setItem('pokemons', pokemon);
    }

    alert("Well done! You successfully catched " + pokemon + "!")
  }
  

}
