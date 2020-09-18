import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage='An Error Ocuured. Please contact support team ***-**-***'

  constructor() { }

  ngOnInit(): void {
  }

}
