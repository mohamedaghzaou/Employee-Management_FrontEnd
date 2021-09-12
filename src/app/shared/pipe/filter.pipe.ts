import { Pipe, PipeTransform } from '@angular/core';
import { employee } from '../models/employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: employee[],startwith:string): employee[] {
    if(startwith===''){
      return value;
    }
    let employee= [];
    value.forEach(e=>{
      if(e.firstName.startsWith(startwith)){

        employee.push(e)
      }
    })
    return employee;
  }

}
