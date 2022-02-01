import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Intern } from '../model/Intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http:HttpClient) { }


  public getAllInterns(){
    return this.http.get(`${environment.baseUrl}/intern/all`)
  }

  public deleteIntern(id:any){
    return this.http.delete(`${environment.baseUrl}/intern/${id}`)
  }

  public updateIntern(data:Intern,id:any){
    return this.http.put(`${environment.baseUrl}/intern/${id}`, data)
  }
  public loadAllInterns(){
    return this.http.get(`${environment.baseUrl}/intern/load`)
  }
}
