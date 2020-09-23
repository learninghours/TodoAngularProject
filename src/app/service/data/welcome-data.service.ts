import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAuthenticaionService } from '../basic-authenticaion.service';

export class HelloWorldBean{
  constructor(public message : string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private basicAuthenticationService : BasicAuthenticaionService,
    private http : HttpClient
  ) { }

  executeHelloWorldBeanService(){
    //console.log("execute hellow worldd service");
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithParam(name){
    //console.log("execute hellow worldd service");

    // let basicAuthHeaderString=this.createBasicAuthenticationHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    let headers =  new HttpHeaders(
        {
          Authorization: basicAuthHeaderString
        }
      )
    
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, 
    {headers}
    );
  }

  // createBasicAuthenticationHeader(){

  //   let username='amit'
  //   let password='dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

  //   return basicAuthHeaderString;
  // }

}
