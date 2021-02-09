import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup} from '@angular/forms';
import { Response_ } from './response';
@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
private readonly apiurl = 'https://localhost:44319/api/Volunteers';

  constructor(private readonly http: HttpClient) { 
}

postVolunteer(data: FormGroup): Observable <any>{
      console.log('inside Post');
      console.log(data);
      return this.http.post(this.apiurl, data);
}


}

