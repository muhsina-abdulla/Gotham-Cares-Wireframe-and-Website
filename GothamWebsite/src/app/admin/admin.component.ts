import { Component, OnInit } from '@angular/core';
/**
 * This component serves as the Admin page.
 * Component is loaded when the admin logs in successfully.
 * 
 * Component contains:
 * 1.adminnavbar Component
 * 2.footer COmponent
 * 
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
