import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employee } from 'src/app/shared/models/employee';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css'],


  
})
export class EmployeesDetailsComponent implements OnInit {


  EmployeeList:employee[]=[];
  constructor(private employeeService :EmployeeService) { 
        this.employeeService.getALLEmployees().subscribe(data=>{
          this.EmployeeList= data;
          console.log(this.EmployeeList)
        })
  }

  ngOnInit(): void {

  }

}
