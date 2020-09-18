import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticaionService } from '../service/hardcoded-authenticaion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="amit"
  password=""
  errorMessage= 'Invalid Credentials'
  invalidLogin=false

  //dependency Injection
  constructor(private router:Router,
    private hardcodedservice : HardcodedAuthenticaionService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedservice.authenticate(this.username, this.password)){
       this.router.navigate(['welcome', this.username])
       this.invalidLogin=false;
     }else{
       this.invalidLogin=true;
    }
  }

}
