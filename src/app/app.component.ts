import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon-trainer';

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {

    this.pokemonService.fetchPokemons();
  }
}
