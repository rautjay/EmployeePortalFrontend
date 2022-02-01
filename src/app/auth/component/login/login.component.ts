import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginData = {
    username:"",
    password:""
  }

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("login btn clicked");
    if(this.loginData.username.trim()==''|| this.loginData.username==null)
    {
      alert("username is required!!")
    }
    this.loginservice.generateToken(this.loginData).subscribe(
      (data:any)=>{
         console.log(data)
        alert("success");

        //login........
        this.loginservice.loginUser(data.token);
        this.loginservice.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginservice.setUser(user);
            console.log(user);
           
            //redirect Admin...Admin dashboard
            //redirect Emplolyee...Employee Dashboard
            //redirect Intern...Intern Dashboard
           
            if(this.loginservice.getUserRole()=="ADMIN")
            {   
              //Admin dashboard
               this.router.navigate(['/admin'])
                  
            }else if(this.loginservice.getUserRole()=="EMPLOYEE")
            {
              //Employee Dashboard
              this.router.navigate(['/auth/employee'])

            }else if(this.loginservice.getUserRole()=="INTERN")
            {
                //Intern Dashboard
                window.location.href = '/intern-dashboard';
            }else{
              this.loginservice.logout();
              

            }

          });
        
        

      },
      (error)=>{
           console.log(error)
           alert("error");
         alert("Invalid Details")
      }
      );
    
  }
  

}