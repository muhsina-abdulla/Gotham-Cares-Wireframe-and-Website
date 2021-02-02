import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutletlistService {

  constructor(private readonly http: HttpClient){

  }
  private readonly apiurl = 'https://localhost:44319/api/Outlet/Outlets';

  getOutlets(): Observable<any>
  {
      return this.http.get<any>(this.apiurl);
  }

}
