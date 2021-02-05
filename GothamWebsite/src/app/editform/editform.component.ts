import { Component, OnInit } from '@angular/core';
import { OutletlistService } from '../outletlist.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css'],
  providers: [OutletlistService]
})
export class EditformComponent implements OnInit {

  constructor(public readonly service: OutletlistService) { }

  ngOnInit(): void {

    
  }
  Edit(){
    return true;
  }
  
}
