import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { OutletlistService } from '../outletlist.service';
import { Response_ } from '../response';
/**
 * This component contains the form to add a new outlet.
 * 
 * Form contains the following fields:
 * Outlet Name,Street,Landmark,Available Food Packets,Type of Food,Required Volunteers,Date.
 * 
 * On clicking ADD button an API call will be made to 'https://localhost:44319/api/Outlet'
 * Based on the API responses one scenario out of the following will occur:
 * 1.If successful,'Outlet Added Successful' message will be shown.
 * 1.If deletion is not successful,'Failed to add the outlet,Try Again' message will be shown.
 *  
 * Members:
 * 2.response- A Response_ instance for storing the API response.
 * 3.outletForm - A FormGroup instance.
 * 4.service - An OutletlistService instance to make the API calls.
 * 5.FormBuilder - A Formbuilder instance to create the edit form.
 * 6.createForms() - A private method which is called on the initial loading of the
 *                component to initialize the outletForm.
 * 7.addOutlet() - A Function which will be called when user clicks the ADD button.
 */
@Component({
  selector: 'app-add-outlet-window',
  templateUrl: './add-outlet-window.component.html',
  styleUrls: ['./add-outlet-window.component.css'],
  providers: [OutletlistService]
})
export class AddOutletWindowComponent implements OnInit {
  outletForm!: FormGroup;
  response!: Response_;
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
    this.service.postOutlet(this.outletForm.value).subscribe(res => {
      this.response = res;
      window.alert(this.response.message);
    });
    }
}


