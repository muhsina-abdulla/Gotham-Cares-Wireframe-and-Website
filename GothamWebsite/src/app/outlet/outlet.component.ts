import { Component, Input, OnInit } from '@angular/core';
import { Outlet } from '../outlet.model';
import { OutletlistService } from '../outletlist.service';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css'],
  providers: [OutletlistService]
})
export class OutletComponent implements OnInit {
  @Input()
  outlet!: Outlet;
  edit = false;
  constructor(private service: OutletlistService) { }
 
  ngOnInit(): void {
  }

   delete(outlet: Outlet): void{
    console.log('clicked');
    this.service.deleteOutlet(outlet).subscribe((response) => {
      console.log(response);
    });
    window.alert('Outlet Deleted Successfully');
  }

  onEdit(): void{
    this.edit = true;
  }

}
