import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Outlet } from '../outlet.model';
import { Response_ } from '../response';
import { VolunteerService } from '../volunteer.service';
/**
 * This component contains the volunteer registration form.
 * 
 * It has the following input fields:
 * Outlet Id,Name,Phone Number,and Email 
 * 
 * It contains a button 'Register'
 * On clicking the button,An API call is made to the API endpoint 'https://localhost:44319/api/Volunteers'
 * with the following payload:
 * -outletId,name,phone,email
 * 
 * The API response "Registration Succesful" message is shown on the screen.
 * 
 * Members:
 * 1.registrationForm - An instance of the FormGroup which countains the volunteer details fields and the outletId field
 * 2.outlet - An Outlet instance which is an input to this component.
 * 3.response - A Response_ instance which will hold the response from the API.
 * 4.service- A VolunteerService instance to make the API calls.
 * 5.fb - A FormBuilder instance to create the registration form.
 * 6.createForms()-A private method which is called on the initial loading of the
 *                component to initialize the registrationForm.
 * 7.registerVol()- A Function which will be called when user clicks the Register button.
 * 
 */

@Component({
  selector: 'app-vol-register',
  templateUrl: './vol-register.component.html',
  styleUrls: ['./vol-register.component.css'],
  providers: [VolunteerService]
})
export class VolRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  @Input() outlet!: Outlet;
  response: Response_ = new Response_();
  constructor(
    private service: VolunteerService,
    private readonly fb: FormBuilder
    ) { }

  ngOnInit(): void {
    console.log(this.outlet);
    this.createForms();
  }
  private createForms(): void{
    this.registrationForm = this.fb.group({
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      outletId:new FormControl(this.outlet.outletId)
    }); }

  
  registerVol(){ 
    console.log('inside registerVol');
    this.service.postVolunteer(this.registrationForm.value).subscribe(resp =>{
      this.response = resp;
      console.log(resp);
      window.alert(this.response.message);
    })
  }
}
