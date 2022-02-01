export interface Intern{

    
          id?:number,
          name?: string,
          mentor?:string,
          location?:string,
          address?:string,
          mobile?:number,
          email?:string,
          projectname?:string,
          userId:any
         

      

}

// export interface Interndata{

    
//     id?:number,
//     name?: string,
//     mentor?:string,
//     location?:string,
//     address?:string,
//     mobile?:number,
//     email?:string,
//     projectname?:string,
//     userId:any



// }



export interface InternLeave{
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