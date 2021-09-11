import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeProjects } from '../../models/EmployeeProjects';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProjectService {

  private baseUrl = environment.baseUrl;


  constructor(private http :HttpClient) { }

  getEmployeeProject(id:Number):Observable<EmployeeProjects>{
    return this.http.get<EmployeeProjects>( `${this.baseUrl}Employee-Projects/${id}`)
  }
  getALLEmployeeProjects():Observable<EmployeeProjects[]>{
   return this.http.get<EmployeeProjects[]>( `${this.baseUrl}Employee-Projects`)
 }
 saveEmployeeProject(e:EmployeeProjects,EmployeeId:number):Observable<EmployeeProjects[]>{
   return this.http.post<EmployeeProjects[]>( `${this.baseUrl}Employee-Projects/${EmployeeId}`,e)
 }
 updateEmployeeProject(e:EmployeeProjects):Observable<EmployeeProjects[]>{
   return this.http.post<EmployeeProjects[]>( `${this.baseUrl}Employee-Projects`,e)
 }
 deleteDepartment(id:Number):Observable<any>{
  return this.http.delete<any>( `${this.baseUrl}Employee-Projects/${id}`,{observe:"body"})
}
}
