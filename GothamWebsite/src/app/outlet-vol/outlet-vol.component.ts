import { Component, OnInit } from '@angular/core';
import { OutletlistService } from '../outletlist.service';
import {Outlet} from '../outlet.model';
import {Observable} from "rxjs";



@Component({
  selector: 'app-outlet-vol',
  templateUrl: './outlet-vol.component.html',
  styleUrls: ['./outlet-vol.component.css'],
  providers: [OutletlistService],
})
export class OutletVolComponent implements OnInit {
  outlets: Observable<Outlet[]> | undefined;
  constructor(private outletlistService: OutletlistService) { }

  ngOnInit(): void {
             this.outlets = this.outletlistService.getOutlets();
        }
  }





