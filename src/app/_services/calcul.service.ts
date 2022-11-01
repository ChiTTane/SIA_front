import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const API_URL = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})

export class CalculService {
  constructor(private http:HttpClient) { }

  calculAnnuitee(capital:number,taux:number,duree:number):Observable<any>{
    return this.http.post(API_URL+'calculAnnuitee',{capital:capital,taux:taux,duree:duree})
  }
  calculCapital(annuitee:number,taux:number,duree:number):Observable<any>{
    return this.http.post(API_URL+'calculCredit',{annuitee:annuitee,taux:taux,duree:duree})
  }
  calculDuree(capital:number,taux:number,annuitee:number):Observable<any>{
    return this.http.post(API_URL+'calculDuree',{capital:capital,taux:taux,annuitee:annuitee})
  }
}
