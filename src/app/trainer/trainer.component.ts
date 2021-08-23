import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  _pokemons: string[] = [];

  constructor(private route:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("username")) {
      this.route.navigate(['/'])
    }

    this._pokemons = JSON.parse(JSON.stringify(localStorage.getItem("pokemons")))?.split(",");
  }

  get pokemons(): string[]{
    return this._pokemons;
  }

}
