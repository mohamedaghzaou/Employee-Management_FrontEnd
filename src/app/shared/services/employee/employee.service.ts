import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = environment.baseUrl;

  constructor(private http :HttpClient) { }

   getEmployee(id:Number):Observable<employee>{
     return this.http.get<employee>( `${this.baseUrl}Employee-Details/${id}`)
   }
   getALLEmployees():Observable<employee[]>{
    return this.http.get<employee[]>( `${this.baseUrl}Employee-Details`)
  }
  saveEmployee(e:employee, idDepartment:number,idPosition:number):Observable<employee[]>{
    return this.http.post<employee[]>( `${this.baseUrl}Employee-Details/${idPosition}/${idDepartment}`,e)
  }
  updateEmployee(e:employee, idDepartment:number,idPosition:number):Observable<employee[]>{
    return this.http.post<employee[]>( `${this.baseUrl}Employee-Details/${idPosition}/${idDepartment}`,e)
  }
  deleteEmployee(id:Number):Observable<any>{
    return this.http.delete<any>( `${this.baseUrl}Employee-Details/${id}`)
  }
}
