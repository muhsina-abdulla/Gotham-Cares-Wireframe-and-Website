import { Component, Injectable, OnInit } from '@angular/core';
import { Outlet } from '../outlet.model';
import { OutletlistService } from '../outletlist.service';
/**
 * This component serves as the page for editing and deleting the outlets.
 * 
 * It contains the components:
 * 1.secondnav: nav bar of this page
 * 2.outlet Components
 * 
 * This component uses the Outletlist service.
 * 
 * On initial loading of the component,getOutlets() method of the Outletlist 
 * service is called which returns a list of distribution outlets.
 * 
 * for each item in the returned outlet list,an outlet component is created in 
 * the page.
 * 
 * Each outlet component has an edit and delete button.
 * On clicking delete, the corresponding outlet is deleted.
 * On clicking edit, editform component for the corresponding outlet is loaded. 
 * 
 * Members:
 * 1.outlets- A list of Outlet class to contain the result from API.
 * 2.service- An instance of OutletlistService to make API call to get the list of outlets.
 */
@Component({
  selector: 'app-edit-delete-outlet',
  templateUrl: './edit-delete-outlet.component.html',
  styleUrls: ['./edit-delete-outlet.component.css'],
  providers: [OutletlistService]
})

export class EditDeleteOutletComponent implements OnInit {
  public outlets: Outlet[] = [];
  
  constructor(private service: OutletlistService) { }

  ngOnInit(): void {
              this.service.getOutlets().subscribe((data) => {
               this.outlets = Array.from(Object.keys(data), k => data[k]);
               console.log(this.outlets);
             });
  }
 

  
  

}
