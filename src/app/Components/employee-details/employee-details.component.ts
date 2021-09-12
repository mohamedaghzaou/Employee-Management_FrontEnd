import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
 
})
export class EmployeeDetailsComponent implements OnInit {
  
 @Input() EmployeeList:employee[]
 @Input() filterValue:string;
  constructor() { 
  }

  ngOnInit(): void {
  }

  delete(id:number){

  }

}
