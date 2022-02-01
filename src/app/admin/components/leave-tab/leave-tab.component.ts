import { Component, OnInit } from '@angular/core';
import { EmpLeave } from 'src/app/model/Employee';
import { InternLeave } from 'src/app/model/Intern';
import { EmployeeService } from 'src/app/services/employee.service';
import { InternService } from 'src/app/services/intern.service';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-tab',
  templateUrl: './leave-tab.component.html',
  styleUrls: ['./leave-tab.component.css'],
})
export class LeaveTabComponent implements OnInit {
  empLeaveData!: EmpLeave[];
  employeeLeave: EmpLeave;
  leaveList: any[];
  nol: any[];
  internLeaveData!:InternLeave[];
  internLeave:InternLeave;

  numberOfLeave = null;

  constructor(private employeeService: EmployeeService, private internService:InternService) {}

  ngOnInit(): void {
    this.employeeService.loadAllEmployee().subscribe((data: any) => {
      var numberLeaves = null;
      this.empLeaveData = data;

      console.log(data);
      this.empLeaveData.forEach((item) => {
        console.log('LeaveList:', item.leavelist);
        item.leavelist.forEach((result) => {
          if (result.leavetype === 'casual') {
            numberLeaves = result.numberOfLeave;
            console.log(result.numberOfLeave);
            const newArray:any = this.nol.push(numberLeaves)
            console.log(newArray)
            console.log(this.nol,"number of leaves")
          }
        });
      });
    });

    //for fetching data of intern List
    this.internService.loadAllInterns().subscribe((data: any) => {
      var numberLeaves = null;
      this.internLeaveData = data;
  });
}

  //for searching
  getEventValue($event: any): string {
    return $event.target.value;
  }
}
