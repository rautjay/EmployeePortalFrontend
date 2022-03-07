import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/model/Employee';
import { DocumentsService } from 'src/app/services/documents.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { saveAs } from 'file-saver';

import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { documents } from 'src/app/model/documents';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css'],
  providers: [MessageService],
})
export class EmpDashboardComponent implements OnInit {
 
  documents:documents[]=[];
  employee:Employee;
  empId = "";
  message = '';
  errorMsg = '';
  selectedFiles?: FileList;
  currentFile?: File;
  profilePic="";
  constructor(private empService:EmployeeService, private docService:DocumentsService, private messageService:MessageService, private loginService:LoginService) { }
     
  ngOnInit(): void {
   
    this.empId = sessionStorage.getItem("empId");
   
    this.loginService.getCurrentUser().subscribe((user:any)=>{
      this.profilePic = user.employee.profilePic;
      
    this.employee = user.employee
   })
 

   this.empService.getEmployee(this.empId).subscribe((data:any)=>{
     this.documents = data.documents;
   })

 }

     formSubmit(employee:Employee)
     {
       this.employee = {...employee}
        
       if (this.empId) {
        console.log("id>.." + this.employee.id)
        //swal fire code starts here
   
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success');
            //Logic for Update
            this.empService.updateEmployee(this.employee, this.employee.id)
              .subscribe((result) => {
                this.ngOnInit();
              });
          } else if(result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info');
          }
        });
    }
     }


     selectFile(event: any): void {
      this.selectedFiles = event.target.files;
    }


     uploadFile() {
     
      this.errorMsg = '';

      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
  
        if (file) {
          this.currentFile = file;
  
          this.docService.upload(this.currentFile,this.empId).subscribe(
            (event: any) => {
             
              this.ngOnInit()
               alert("file uploaded");
            
            });
            (err: any) => {
              console.log(err);
             
              this.currentFile = undefined;
            }
          
        }
  
        this.selectedFiles = undefined;
      }
    }
     
    downloadFile(filename: string): void {
      this.docService.download(filename).subscribe((event) => {
        saveAs(event, filename);
      });
      (error: HttpErrorResponse) => {
        console.log(error);
      };
    }
  
  
}
