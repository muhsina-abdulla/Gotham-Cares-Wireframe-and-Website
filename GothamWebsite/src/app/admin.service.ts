import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  email!: string;
  password!: string;
  constructor(private http: HttpClient) { }
  private readonly apiurl = `https://localhost:44319/`;

  
  login(): Observable<any> {
    console.log(`url: ${this.apiurl}`)
    return this.http.get(`${this.apiurl}${this.email}/${this.password}`);
  }
}
