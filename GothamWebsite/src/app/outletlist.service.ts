import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Outlet } from './outlet.model';
import { FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OutletlistService {

  constructor(private readonly http: HttpClient){

  }
  private readonly apiurl = 'https://localhost:44319/api/Outlet';

  getOutlets(): Observable<any>
  {
      return this.http.get<any>(this.apiurl);
  }

   postOutlet(data: FormGroup): void{
      console.log(data);
      this.http.post(this.apiurl, data).subscribe(res => {
      console.log(res);
      window.alert(res);
  }); }

  deleteOutlet(outlet: Outlet): Observable<any>{
    console.log(outlet.outletId);
    return this.http.delete(`https://localhost:44319/${outlet.outletId}`);
  }

  putOutlet(data: FormGroup, id: number): Observable<any>{
    console.log(data);
    return this.http.put(`https://localhost:44319/${id}`, data);
  }

}
