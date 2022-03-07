import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { InternService } from 'src/app/services/intern.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  providers: [MessageService],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user ={
    username:'',
    password:'',
       employee:
         {
          name:'',
          location:'',
          designation:'',
          mobile:'',
          email:'',
          department:''
           }
       };

       public user1 = {
         username:'',
          password:'',
          intern:
            {
             name:'',
             location:'',
             mentor:'',
             mobile:'',
             email:'',
             projectname:'',
             address:''
              }
            }

  constructor(private userService:UserService, private messageService:MessageService, private internService:InternService) { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.user.username == ''|| this.user.username == null){
     // alert('User is Required!!');
     alert("Username is Required!!!")
     this.messageService.add({severity: 'error', summary: 'Username is required', detail: ''});
      return;
    }

  //addUser:userservice
   this.userService.addUser(this.user).subscribe((data:any)=>{
     console.log(data);
    // alert('success')
      Swal.fire('Success!!','Employee Succesfully Registered!!','success')  
   },
   (error)=>{
     console.log(error)
     Swal.fire('Error!!','Something Went Wrong!!','error')  
   }
   )
  }
    

   formSubmitIntern()
  {
    if(this.user1.username == ''|| this.user1.username == null){
     // alert('User is Required!!');
     alert("Username is Required!!!")
     this.messageService.add({severity: 'error', summary: 'Username is required', detail: ''});
      return;
    }

  //addUser:userservice
   this.userService.addUser(this.user1).subscribe((data:any)=>{
     console.log(data);
    // alert('success')
      Swal.fire('Success!!','Employee Succesfully Registered!!','success')  
   },
   (error)=>{
     console.log(error)
     Swal.fire('Error!!','Something Went Wrong!!','error')  
   }
   )
    
  }


  }


