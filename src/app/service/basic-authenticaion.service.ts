import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticaionService {

  constructor(private http: HttpClient) { }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser')
   }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem('token')
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser')
    return !(user ===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }

  executeAuthenticationService(username, password){
    //console.log("execute hellow worldd service");

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {
      headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username)
          sessionStorage.setItem('token', basicAuthHeaderString)
          return data;
        }

      )
    );
  }

}

export class AuthenticationBean{
  constructor(public message : string){

  }
}