import { Component, OnInit } from '@angular/core';

/**
 * This component serves as the navbar of the Admin page.
 * 
 * Component contains Rounterlinks to :
 * 1.load add-outlet-window Component:to add a new outlet.
 * 2.load edit-delete-outlet Component:to edit/delete an existing Outlet
 * 
 */
@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
