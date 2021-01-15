import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url = 'https://randomuser.me/api';

  getDetails(page, result, country , gender) {
    return this.http.get(this.url +
      '/?page=' + page + '&results=' + result + '&gender=' + gender + '&nat=' + country );
  }
}
