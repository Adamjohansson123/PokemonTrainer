import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private route: Router) { }
  /**
   * redirect if user already is logged in
   */
  ngOnInit(): void {
    if (localStorage.getItem("username")) {
      this.route.navigate(['/catalogue'])
    }
  }
  /**
   * Tries to log in user, checks that the user has inputed something as username and adds the username to the localstorage. 
   * When this is done the user is redirected to the catalogue page
   * @param event the submit event that contains the username  
   */
  onSubmit(event: any): void {
    if (event.target.username.value !== '') {
      localStorage.clear();
      localStorage.setItem('username', event.target.username.value);
      this.route.navigate(['/catalogue'])
    } else {
      alert("Username must contain text")
    }
  }

}
