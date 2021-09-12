import { Department } from "./Departments";
import { Position } from "./Position";

 export class employee{
    employeeId:number;
    firstName:string;
    lastName:string;
    midName:string;
    birthDate:string;
    sex:string;
    Address:string;
    employeeDate:string;
    salary:number;
    position:Position;
    departments:Department;
}