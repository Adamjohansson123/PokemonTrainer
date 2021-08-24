import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  _pokemons: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this._pokemons = JSON.parse(JSON.stringify(localStorage.getItem("pokemons")))?.split(",");
  }

  get pokemons(): string[] {
    return this._pokemons;
  }

}
