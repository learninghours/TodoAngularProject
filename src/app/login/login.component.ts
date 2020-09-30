import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticaionService } from '../service/hardcoded-authenticaion.service';
import { BasicAuthenticaionService } from '../service/basic-authenticaion.service';


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
    //private hardcodedservice : HardcodedAuthenticaionService,
    private basicAuthenticationService : BasicAuthenticaionService) { }

  ngOnInit(): void {
  }

 

  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false
      },
      error => {
        console.log(error)
        this.invalidLogin=true
      }
      
    )
  }

  
  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false
      },
      error => {
        console.log(error)
        this.invalidLogin=true
      }
      
    )
  }

}
