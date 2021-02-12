import { Component, OnInit } from '@angular/core';
/**
 * This component serves as the home page of the website.
 * This component contains the child components:
 * 1.navbar Component
 * 2.welcome Component
 * 3.footer component
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
