import { Component, OnInit } from '@angular/core';
import { OutletlistService } from '../outletlist.service';
import {Outlet} from '../outlet.model';



@Component({
  selector: 'app-outlet-vol',
  templateUrl: './outlet-vol.component.html',
  styleUrls: ['./outlet-vol.component.css'],
  providers: [OutletlistService]
})
export class OutletVolComponent implements OnInit {
  public outlets: Outlet[] = [];
  constructor(private service: OutletlistService) { }
  ngOnInit(): void {
             this.service.getOutlets().subscribe((data) => {
               this.outlets = Array.from(Object.keys(data), k => data[k]);
               console.log(this.outlets);
             });
        }
  fillform(outlet: Outlet): void{
    this.service.formdata = outlet;
    console.log(this.service.formdata);
  }

}





