import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Outlet } from './outlet.model';

@Injectable({
  providedIn: 'root'
})
export class OutletlistService {
  formdata: Outlet = {
    id: 0,
    name: '',
    street: '',
    landmark: '',
    availableFoodPackets: 0,
    foodType: '',
    requiredVolunteers: 0,
    date: '',
  };
  constructor(private readonly http: HttpClient){

  }
  private readonly apiurl = 'https://localhost:44319/api/Outlet';

  getOutlets(): Observable<any>
  {
      return this.http.get<any>(this.apiurl);
  }

}
