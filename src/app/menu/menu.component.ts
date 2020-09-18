import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticaionService } from '../service/hardcoded-authenticaion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn : boolean = false;

  constructor(public hardcodedAuthentication : HardcodedAuthenticaionService) { }

  ngOnInit(): void {
   // this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
  }

}
