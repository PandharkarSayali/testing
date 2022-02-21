import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
/*  getAPIList(){
    return this.http.get('http://localhost:8080/users')
  }

  postAPIData(){
    return this.http.post('http://localhost:8080/users', {'firstName' : 'Code', 'lastName' : 'Handbook','Username':'Code handbook'}) 
  }*/
}
