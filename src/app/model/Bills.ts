import { Byte } from "@angular/compiler/src/util";

export interface Bills{
    billsId?:number;
    amount?:number;
    attachement?:Byte[];
    fileUri?:string;
    filename?:string;



}