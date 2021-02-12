import { Component, OnInit } from '@angular/core';
/**
 * This component serves as the navbar of the home page.
 * 
 * Component contains links to:
 * 1.distribution-page component.
 * 2.sign-in component
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
