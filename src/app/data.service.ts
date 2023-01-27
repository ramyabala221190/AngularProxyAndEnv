import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(){
    console.log(environment);
   return this.http.get(`${environment.baseUrl}users/info`)
  }

  getUsers(){
    console.log(environment);
   return this.http.get(`${environment.baseUrl}users`)
  }
}
