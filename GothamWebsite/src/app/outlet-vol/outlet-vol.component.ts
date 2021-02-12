import { Component, Input, OnInit } from '@angular/core';
import { OutletlistService } from '../outletlist.service';
import {Outlet} from '../outlet.model';

/**
 * This Component contains a single outlet details.
 * 
 * It has one button 'Volunteer' which when clicked loads vol-register component
 * 
 * Members:
 * 1.outlet- An Outlet instance is taken as input to the component.
 * 2.volunteer - AN instance variable which is set to false initially.When user clicks on the Volunteer button
 *               this variable is set to true.
 * 3.fillform() - A function which is called when the user clicks on Volunteer button. 
 */

@Component({
  selector: 'app-outlet-vol',
  templateUrl: './outlet-vol.component.html',
  styleUrls: ['./outlet-vol.component.css'],
  providers: [OutletlistService]
})
export class OutletVolComponent implements OnInit {
  @Input() outlet!: Outlet;
  volunteer = false;
  
  constructor(private service: OutletlistService) { }
  ngOnInit(): void {
             
        }
  fillform(): void{
    this.volunteer = true;
  }

}





