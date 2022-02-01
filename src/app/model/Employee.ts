export interface Employee{

  
 
          id?:number,
          name?: string,
          designation?:string,
          email?:string;
          location?:string,
          department:string,
          mobile?:string
          
      }
    



export interface EmpLeave{
    id?:number,
    name?:string,
         leavelist:[{
              name?:string,
              numberOfLeave?:number,
              fromDate:Date,
              toDate:Date,
              reason:string,
              comment: string,
              leavetype:string
                    
         }],
         


}