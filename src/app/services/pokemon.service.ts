import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Pokemon } from '../models/pokemon';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
  //private _pokemons: Pokemon[] = [];
  private _pokemons: any[] = [];
  private _error: string = '';
  private _API_url = 'https://pokeapi.co/api/v2/'; // URL to web api


  constructor(private readonly http: HttpClient) {}

  public fetchPokemons(): void {
    this.http.get(this._API_url + 'pokemon/?limit=151')
    .subscribe((pokemons: any) => {
      pokemons.results.forEach((pokemon:any) => {
          this.getPokemonData(pokemon.name)
          .subscribe((data: any) => {
            this._pokemons.push(data);
            this._pokemons = this._pokemons.sort((a, b) => a.id - b.id)
          })
        });
        //this._pokemons = pokemons.results
    }), (error: HttpErrorResponse) => {
        this._error = error.message;
    }   

    //
  }

  public pokemons(): Pokemon[] {
      return this._pokemons;
    //return this._pokemons.sort((a, b) => a.id - b.id);
  }

  
  private getPokemons(){
    return this.http.get(this._API_url + 'pokemon/?limit=10');
  }

  private getPokemonData(name:string){
    return this.http.get(this._API_url + `pokemon/${name}`);
  }

  public getPokemonByName(name: string): string {
    this.http.get<string>(this._API_url + 'pokemon/' + name)
    .subscribe((pokemons: any) => {
        return pokemons.sprites.front_default
    }), (error: HttpErrorResponse) => {
        this._error = error.message;
    }    
    return ""
  }

}