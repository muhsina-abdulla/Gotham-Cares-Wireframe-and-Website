import { Component, OnInit } from '@angular/core';
import { Outlet } from '../outlet.model';
import { OutletlistService } from '../outletlist.service';

/**
 * This component serves as the page that lists the distribution outlets for
 * the current day and the coming three days.
 * 
 * This component uses  the OutletlistService.
 * 
 * On initial loading of the component, getoutlets() method of the service is called
 * which returns a list of outlets.
 * 
 * For each item in the outlet list,an outlet-vol component is created in the 
 * distribution page.
 * 
 * Members:
 * 1.outlets - A list of type Outlet to hold the outlets.
 * 2.service - An instance of OutletlistService to make the API call.
 *  
 */
@Component({
  selector: 'app-distribution-page',
  templateUrl: './distribution-page.component.html',
  styleUrls: ['./distribution-page.component.css']
})
export class DistributionPageComponent implements OnInit {
  public outlets: Outlet[] = [];
  constructor(private service: OutletlistService) { }

  ngOnInit(): void {
    this.service.getOutlets().subscribe((data) => {
               this.outlets = Array.from(Object.keys(data), k => data[k]);
               console.log(this.outlets);
             });
  }

}
