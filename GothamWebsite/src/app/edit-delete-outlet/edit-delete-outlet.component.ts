import { Component, OnInit } from '@angular/core';
import { Outlet } from '../outlet.model';
import { OutletlistService } from '../outletlist.service';

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
