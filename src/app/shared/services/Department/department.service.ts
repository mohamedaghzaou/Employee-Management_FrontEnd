import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../../models/Departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = environment.baseUrl;

  constructor(private http :HttpClient) { }
  
  getDepartment(id:Number):Observable<Department>{
    return this.http.get<Department>( `${this.baseUrl}Departments/${id}`)
  }
  getALLDepartments():Observable<Department[]>{
   return this.http.get<Department[]>( `${this.baseUrl}Departments`)
 }
 saveDepartment(e:Department):Observable<Department[]>{
   return this.http.post<Department[]>( `${this.baseUrl}Departments`,e)
 }
 updateDepartment(e:Department):Observable<Department[]>{
   return this.http.post<Department[]>( `${this.baseUrl}Departments`,e)
 }
 deleteDepartment(id:Number):Observable<any>{
  return this.http.delete<any>( `${this.baseUrl}Departments/${id}`,{observe:"body"})
}
}
