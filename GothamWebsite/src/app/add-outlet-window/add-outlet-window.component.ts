import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { OutletlistService } from '../outletlist.service';

@Component({
  selector: 'app-add-outlet-window',
  templateUrl: './add-outlet-window.component.html',
  styleUrls: ['./add-outlet-window.component.css'],
  providers: [OutletlistService]
})
export class AddOutletWindowComponent implements OnInit {
  outletForm!: FormGroup;
  constructor(
    private service: OutletlistService,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForms();
  }
  private createForms(): void{
    this.outletForm = this.fb.group({
      name: new FormControl(),
      street: new FormControl(),
      landmark: new FormControl(),
      availableFoodPackets: new FormControl(),
      foodType: new FormControl(),
      requiredVolunteers: new FormControl(),
      date: new FormControl(),
    });
  }
  addOutlet(): void{
    console.log('Clicked');
    this.service.postOutlet(this.outletForm.value);
    }
}


