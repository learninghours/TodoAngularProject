import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string ="some welcome message";
  welcomeMessage:string;
  name: string

  constructor(private route:ActivatedRoute,
    private service : WelcomeDataService) { }

  ngOnInit(): void {
   // console.log(this.message);
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMsg(){
    console.log("this.service.executeHelloWorldBeanService()");
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMsgWithParam(){
    console.log("this.service.executeHelloWorldBeanService()");
    this.service.executeHelloWorldBeanServiceWithParam(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleErrorResponse(error) {
    this.welcomeMessage=error.error.message
  }
  handleSuccessResponse(response){
    this.welcomeMessage=response.message;
   }

}
