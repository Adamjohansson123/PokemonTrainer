import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//export class LoginComponent implements OnInit {
  export class LoginComponent {
  constructor() { }

  ngOnInit(): void {
    
  }

  handleLogin(event: Event): void  {
    console.log("loggin in" + event)
  }

}
