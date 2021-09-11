import { HttpClient } from '@angular/common/http';
import { Position } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeLeaves } from '../../models/EmployeeLeaves';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private baseUrl = environment.baseUrl;

  constructor(private http :HttpClient) {}
  getEmployeeLeaves(id:Number):Observable<EmployeeLeaves>{
    return this.http.get<EmployeeLeaves>( `${this.baseUrl}Employee-Leaves/${id}`)
  }
  getALLEmployeeLeavess():Observable<EmployeeLeaves[]>{
   return this.http.get<EmployeeLeaves[]>( `${this.baseUrl}Employee-Leaves`)
 }
 saveEmployeeLeaves(e:EmployeeLeaves,EmployeeId:Number):Observable<EmployeeLeaves[]>{
   return this.http.post<EmployeeLeaves[]>( `${this.baseUrl}Employee-Leaves/${EmployeeId}`,e)
 }
 updateEmployeeLeaves(e:EmployeeLeaves):Observable<EmployeeLeaves[]>{
   return this.http.post<EmployeeLeaves[]>( `${this.baseUrl}Employee-Leaves`,e)
 }
 deleteEmployeeLeaves(id:Number):Observable<any>{
  return this.http.delete<any>( `${this.baseUrl}Employee-Leaves/${id}`,{observe:"body"})
}
}
