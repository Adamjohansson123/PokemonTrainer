import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private route: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("username")) {
      this.route.navigate(['/catalogue'])
    }
  }

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
