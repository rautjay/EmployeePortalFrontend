import { Component, OnInit } from '@angular/core';
import { ReportData } from 'src/app/model/Report';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-report-tab',
  templateUrl: './report-tab.component.html',
  styleUrls: ['./report-tab.component.css']
})
export class ReportTabComponent implements OnInit {

  reportData:ReportData[];
  report:ReportData;

  constructor(private userService:UserService,private reportService:ReportService) {


   }

  ngOnInit(): void {

    this.reportService.getAllReports().subscribe((data:any)=>{
    
      this.reportData = data;
      console.log(data);
      
    })
  }


  updateReport(){
    console.log("editing.......report..")
  }
  deleteReport(){
    console.log("deleting report..........");
    
  }

   //for searching 
getEventValue($event:any) :string {
 return $event.target.value;
} 
}
