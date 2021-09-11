import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeAttendance } from '../../models/EmployeeAttendance';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAttendanceService {

  private baseUrl = environment.baseUrl;

  constructor(private http :HttpClient) { }
  getEmployeeProject(id:Number):Observable<EmployeeAttendance>{
    return this.http.get<EmployeeAttendance>( `${this.baseUrl}Employee-Projects/${id}`)
  }
  getALLEmployeeProjects():Observable<EmployeeAttendance[]>{
   return this.http.get<EmployeeAttendance[]>( `${this.baseUrl}Employee-Projects`)
 }
 saveEmployeeProject(e:EmployeeAttendance,EmployeeId:number):Observable<EmployeeAttendance[]>{
   return this.http.post<EmployeeAttendance[]>( `${this.baseUrl}Employee-Projects/${EmployeeId}`,e)
 }
 updateEmployeeProject(e:EmployeeAttendance):Observable<EmployeeAttendance[]>{
   return this.http.post<EmployeeAttendance[]>( `${this.baseUrl}Employee-Projects`,e)
 }
 deleteDepartment(id:Number):Observable<any>{
  return this.http.delete<any>( `${this.baseUrl}Employee-Projects/${id}`,{observe:"body"})
}
}
