import { Pipe, PipeTransform } from '@angular/core';
import { employee } from '../models/employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: employee[],filterby:string,startwith:string): employee[] {
    if(startwith===''){
      return value;
    }
    let employee= [];
    value.forEach(e=>{
      if(e[filterby].startsWith(startwith)){

        employee.push(e)
      }
    })
    return employee;
  }

}
