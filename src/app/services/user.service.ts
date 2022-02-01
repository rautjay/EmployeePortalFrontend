import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

   //adding user
   public addUser(user:any)
   {
     console.log(user);
     
          return this.http.post(`${environment.baseUrl}/emp/register`,user);  
 
          
   }

   public updateUser( id:any ,user:any)
   {
     return this.http.put(`${environment.baseUrl}/emp/update`,user)
   }

   public getReport()
   {
     return this.http.get(`${environment.baseUrl}/user/`)
   }

   public getUser(id:any){
    return this.http.get(`${environment.baseUrl}/user/${id}`)

   }
}
