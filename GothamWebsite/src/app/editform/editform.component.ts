import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Outlet } from '../outlet.model';
import { OutletlistService } from '../outletlist.service';
@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css'],
  providers: [OutletlistService]
})
export class EditformComponent implements OnInit {
  @Input() outlet!: Outlet;
  outletForm!: FormGroup;
  constructor(
    private service: OutletlistService,
    private readonly fb: FormBuilder){ }

  ngOnInit(): void {
    console.log(this.outlet);
    this.createForms();
  }
  private createForms(): void{
    this.outletForm = this.fb.group({
      outletId:new FormControl(),
      name: new FormControl(),
      street: new FormControl(),
      landmark: new FormControl(),
      availableFoodPackets: new FormControl(),
      foodType: new FormControl(),
      requiredVolunteers: new FormControl(),
      date: new FormControl(),
    }); }
   edit(): void{
    console.log('Clicked');
    this.service.putOutlet(this.outletForm.value,this.outlet.outletId).subscribe(response => {
      console.log(response);
      window.alert('Outlet detailes edited successfully.');
    });

    }
}
