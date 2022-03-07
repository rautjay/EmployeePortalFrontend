import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { documents } from 'src/app/model/documents';
import { Intern } from 'src/app/model/Intern';
import { DocumentsService } from 'src/app/services/documents.service';
import { InternService } from 'src/app/services/intern.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-intern-dashboard',
  templateUrl: './intern-dashboard.component.html',
  styleUrls: ['./intern-dashboard.component.css'],
  providers: [MessageService],
})
export class InternDashboardComponent implements OnInit {

  documents:documents[]=[];
  intern:Intern;
  internId = "";
  message = '';
  errorMsg = '';
  selectedFiles?: FileList;
  currentFile?: File;
  profilePic="";
  constructor(private internService:InternService, private docService:DocumentsService, private messageService:MessageService, private loginService:LoginService) { }
     
  ngOnInit(): void {
   
    this.internId = sessionStorage.getItem("empId");
   
    this.loginService.getCurrentUser().subscribe((user:any)=>{
      this.profilePic = user.intern.profilePic;
      
    this.intern = user.intern
   })
 

   this.internService.getIntern(this.internId).subscribe((data:any)=>{
     this.documents = data.documents;
   })

 }

     formSubmit(intern:Intern)
     {
       this.intern= {...intern}
        
       if (this.internId) {
        console.log("id>.." + this.intern.id)
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
            this.internService.updateIntern(this.intern, this.intern.id)
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
  
          this.docService.uploadToIntern(this.currentFile,this.internId).subscribe(
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
