import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public getAllEmployee(){
    return this.http.get(`${environment.baseUrl}/emp/all`)
  }

  public deleteEmployee(id:any){
    return this.http.delete(`${environment.baseUrl}/emp/${id}`)
  }

  public loadAllEmployee(){
    return this.http.get(`${environment.baseUrl}/emp/load`)
  }
  public updateEmployee(data:Employee,id:any){
    return this.http.put(`${environment.baseUrl}/emp/${id}`,data)
  }

  

  
}
