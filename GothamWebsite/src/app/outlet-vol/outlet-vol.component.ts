import { Component, OnInit } from '@angular/core';
import { OutletlistService } from '../outletlist.service';
import {Outlet} from '../outlet.model';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-outlet-vol',
  templateUrl: './outlet-vol.component.html',
  styleUrls: ['./outlet-vol.component.css'],
  providers: [OutletlistService],
})
export class OutletVolComponent implements OnInit {


  outlets$: Observable<Outlet[]>;
  constructor(private myservice: OutletlistService) { }

  ngOnInit(): void {
     this.myservice.getOutlets().subscribe((data) => {
          this.outlets$ = Array.from(Object.keys(data), k => data[k]);
          console.log(this.outlets$);
        });
  }

  checktype(): boolean {
    let n = typeof this.outlets$;
    if (n === 'object'){
      return true;
    }
    else{
      return false;
    }
  }


}
