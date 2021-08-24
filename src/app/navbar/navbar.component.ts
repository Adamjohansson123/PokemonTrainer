import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTrainer(): void {
    this.router.navigate(['/trainer'])
  }

  goToCatalogue(): void {
    this.router.navigate(['/catalogue'])
  }

  logOut(): void {
    let confirmAction = confirm("Are you sure you want to log out? \n All pokemons will released into the wild again.");
    if (confirmAction) {
      localStorage.clear();
      this.router.navigate(['/'])
    } else {
      
    }
  }

}
