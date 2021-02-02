import { Component, OnInit } from '@angular/core';
import { OutletlistService } from '../outletlist.service';
import {Outlet} from '../outlet.model';


@Component({
  selector: 'app-outlet-vol',
  templateUrl: './outlet-vol.component.html',
  styleUrls: ['./outlet-vol.component.css'],
  providers: [OutletlistService],
})
export class OutletVolComponent implements OnInit {

  constructor(private myservice: OutletlistService) { }
  private Outlets: Outlet[];

  ngOnInit(): void {
     this.myservice.getOutlets().subscribe((data) => {
          this.Outlets = Array.from(Object.keys(data), k => data[k]);
          console.log(this.Outlets);
        });
  }

}
