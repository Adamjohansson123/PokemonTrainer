import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  /**
   * checks if user is logged in. If user isn't logged in the user is redirected to the login page
   */
  ngOnInit(): void {
    if (!localStorage.getItem("username")) {
      this.router.navigate(['/'])
    }
  }
  /**
   * redirect the user to the trainer page
   */
  goToTrainer(): void {
    this.router.navigate(['/trainer'])
  }
  /**
   * redirect the user to the catalogue page
   */
  goToCatalogue(): void {
    this.router.navigate(['/catalogue'])
  }
  /**
   * checks if the user wants to log out. If the users wants to log out the local storage is cleared and the user is redirected to the login page
   */
  logOut(): void {
    let confirmAction = confirm("Are you sure you want to log out?\nAll pokemons will released into the wild again.");
    if (confirmAction) {
      localStorage.clear();
      this.router.navigate(['/'])
    } else {

    }
  }

}
