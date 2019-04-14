import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  // TODO: add the @Input userId
  // if the user has already loggedin, then the headbar should hide two buttons: login and register, and display avartar and username
  // if the user not loggedin, then the headbar should display login and register buttons
  constructor() { }

  ngOnInit() {
  }

}
