import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Response_ } from '../response';

@Component({
  selector: 'app-sighn-in',
  templateUrl: './sighn-in.component.html',
  styleUrls: ['./sighn-in.component.css']
})
export class SighnInComponent implements OnInit {
  loginForm!: FormGroup;
  response: Response_ = new Response_();
  signedIn = false;
  constructor(
    private service: AdminService,
    private readonly fb: FormBuilder) { }
  ngOnInit(): void {
    this.createForms();
  }

 
  private createForms(): void{
    this.loginForm = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  login(): void{
    this.service.email = this.loginForm.controls["email"].value;
    this.service.password = this.loginForm.controls["password"].value;
   // console.log(`email: ${this.service.email}`);
   // console.log(`password: ${this.service.password}`);
    this.service.login().subscribe(response =>{
      this.response = response;
      console.log(response);
      this.checkResponse();

    })
  }
  private checkResponse(): void{
    if(this.response.message === "Login Success"){
      this.signedIn = true;
    }
    else{
      this.signedIn = false;
    }
  }

}
