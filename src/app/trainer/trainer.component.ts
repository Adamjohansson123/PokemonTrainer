import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  _pokemons: string[] = [];
  /**
   * fetches all pokemons that have been caught from local storage
   */
  ngOnInit(): void {
    this._pokemons = JSON.parse(JSON.stringify(localStorage.getItem("pokemons")))?.split(",");
  }
  /**
   * returns the array of pokemons that the user have caught
   */
  get pokemons(): string[] {
    return this._pokemons;
  }

}
