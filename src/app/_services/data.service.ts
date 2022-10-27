import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {  

  constructor(private http: HttpClient) { }
  
  getUserData() {  
   return this.http.get('../assets/userdata.json');
  }

}

