import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  register(formD:any):Observable<any>{
    return this.http.post(API_URL+'registerUser',formD)
  }
  saveCredit(formD:any):Observable<any>{
    return this.http.post(API_URL+"saveCredit",formD)
  }
}
