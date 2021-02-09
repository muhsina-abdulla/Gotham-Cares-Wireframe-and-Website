import { Component, Input, OnInit } from '@angular/core';
import { OutletlistService } from '../outletlist.service';
import {Outlet} from '../outlet.model';



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





