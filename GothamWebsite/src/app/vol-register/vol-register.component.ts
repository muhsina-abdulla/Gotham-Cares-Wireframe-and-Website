import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Outlet } from '../outlet.model';
import { Response_ } from '../response';
import { VolunteerService } from '../volunteer.service';


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
