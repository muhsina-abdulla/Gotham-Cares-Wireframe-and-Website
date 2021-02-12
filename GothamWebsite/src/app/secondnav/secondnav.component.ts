import { Component, OnInit } from '@angular/core';
/**
 * This component contains a navbar with title and Home button which on click redirects
 * the user to the Home Page.
 */
@Component({
  selector: 'app-secondnav',
  templateUrl: './secondnav.component.html',
  styleUrls: ['./secondnav.component.css']
})
export class SecondnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
