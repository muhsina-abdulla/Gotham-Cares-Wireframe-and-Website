import { Component, OnInit } from '@angular/core';
import { OutletlistService } from '../outletlist.service';


@Component({
  selector: 'app-vol-register',
  templateUrl: './vol-register.component.html',
  styleUrls: ['./vol-register.component.css'],
  providers: [OutletlistService]
})
export class VolRegisterComponent implements OnInit {
  constructor(public readonly service: OutletlistService) { }

  ngOnInit(): void {
  }

  Register(){
    return true;
  }
}
