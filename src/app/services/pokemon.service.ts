import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _pokemons: any[] = [];
  private _API = 'https://pokeapi.co/api/v2/'; // URL to web api


  constructor(private readonly http: HttpClient) { }

  public fetchPokemons(): void {
    this.http.get(this._API + 'pokemon/?limit=151')
      .subscribe((pokemons: any) => {
        pokemons.results.forEach((pokemon: any) => {
          this.getPokemonData(pokemon.name)
            .subscribe((data: any) => {
              this._pokemons.push(data);
              this._pokemons = this._pokemons.sort((a, b) => a.id - b.id)
            })
        });
      }), (error: HttpErrorResponse) => {
        console.log(error.message);
      }
  }

  public pokemons(): any[] {
    return this._pokemons;
  }

  private getPokemonData(name: string) {
    return this.http.get(this._API + `pokemon/${name}`);
  }
}