import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Intern } from 'src/app/model/Intern';
import { InternService } from 'src/app/services/intern.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-intern-tab',
  templateUrl: './intern-tab.component.html',
  styleUrls: ['./intern-tab.component.css'],
  providers: [MessageService],
})
export class InternTabComponent implements OnInit {
  
  internData!:Intern[];
  intern!:Intern;
  internTable=true;
  internDetails=false;
  checked1: boolean = true;
  loader: boolean = true;

  submitted?: boolean;
  internDialogue?: boolean;
 
   //for fetching user from employee
   username:any;
  


  constructor(private internservice:InternService,private messageService:MessageService,private userService:UserService) { }

  ngOnInit(): void {

    this.internservice.loadAllInterns().subscribe((data:any)=>{
      this.internData = data;
        
      console.log(data);

      
    });


  }

  deleteIntern(id:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.internservice.deleteIntern(id).subscribe((result) => {
          this.ngOnInit();
        });
      }
    });
  }

  //updating intern......
  updateIntern() {
    this.submitted = true;

    if (this.intern.id) {
      console.log("id>.." + this.intern.id)
      //swal fire code starts here
      this.hideDialog();
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
          this.internservice
            .updateIntern(this.intern, this.intern.id)
            .subscribe((result) => {
              this.ngOnInit();
            });
        } else if(result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info');
        }
      });
  }else{
      console.log("intern not added");
      this.internDialogue = false;
  }
}

  //for searching 
  getEventValue($event:any) :string {
    return $event.target.value;
  } 

  //for hiding intern list and showing intern form
  editIntern(intern:Intern){
    this.intern = { ...intern };
    // this.submitted=false;
    this.internDialogue = true;
    console.log("intern:" + intern);
  }

  hideDialog() {
    this.internDialogue = false;
    this.submitted = false;
  }


}
