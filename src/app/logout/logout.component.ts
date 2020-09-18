import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticaionService } from '../service/hardcoded-authenticaion.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthentication: HardcodedAuthenticaionService) { }

  ngOnInit(): void {
    this.hardcodedAuthentication.logout();
  }

}
