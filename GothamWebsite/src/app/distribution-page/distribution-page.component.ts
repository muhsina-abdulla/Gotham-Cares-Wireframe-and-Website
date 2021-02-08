import { Component, OnInit } from '@angular/core';
import { Outlet } from '../outlet.model';
import { OutletlistService } from '../outletlist.service';

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
