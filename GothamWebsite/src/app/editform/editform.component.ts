import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Outlet } from '../outlet.model';
import { OutletlistService } from '../outletlist.service';
/**
 * This component is the form for editing an existing outlet.
 * 
 * The form containes fields for the following:
 * Outlet Id,Name,Street,Landmark,Available Food Packets,Type of Food,Required Volunteers,and
 * Date.
 * 
 * On initial loading the form fields will be initialized with outlet property values of the
 * parent outlet component so that admin need to make changes only on the desired fields
 * and not fill all the other fields manually.
 * For avoiding the accidental changing of OutletId,that field is set to readonly.
 * 
 * On clicking edit an API call is made to the API endpoint 'https://localhost:44319/{id}'
 * with the following payload:
 * outletId,name,street,landmark,availableFoodPackets,foodType,requiredVolunteers,
 * date.
 * 
 * Based on the API responses,One of the following scenarios will occur:
 * 1.If the edit is successful:"Outlet edited successfully" message will be shown.
 * 2.If the given Id is incorrect:"Outlet doesn't exist" message is shown.
 * 
 * Members:
 * outlet - An Outlet instance which is the Input of the component.
 * outletForm - A FormGroup instance which contains the outlet fields to edit.
 * service - An OutletlistService instance to make the API calls.
 * FormBuilder - A Formbuilder instance to create the edit form.
 * createForms() - A private method which is called on the initial loading of the
 *                component to initialize the outletForm.
 * edit() - A Function which will be called when user clicks the edit button.
 * 
 */
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
      outletId:new FormControl(this.outlet.outletId),
      name: new FormControl(this.outlet.name),
      street: new FormControl(this.outlet.street),
      landmark: new FormControl(this.outlet.landmark),
      availableFoodPackets: new FormControl(this.outlet.availableFoodPackets),
      foodType: new FormControl(this.outlet.foodType),
      requiredVolunteers: new FormControl(this.outlet.requiredVolunteers),
      date: new FormControl(this.outlet.date),
    }); }
   edit(): void{
    console.log('Clicked');
    this.service.putOutlet(this.outletForm.value,this.outlet.outletId).subscribe(response => {
      console.log(response);
      window.alert('Outlet detailes edited successfully.');
    });

    }
}
