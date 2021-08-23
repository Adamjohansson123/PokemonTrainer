import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//export class LoginComponent implements OnInit {
  export class LoginComponent {
  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }

 

  onSubmit(event: any): void  {
    //if("username" !== ''){
    if(true){  
    localStorage.clear();
      localStorage.setItem('username', event.target.username.value);
      this.route.navigate(['/catalogue'])
    }
    console.log("loggin in")
  }

}
