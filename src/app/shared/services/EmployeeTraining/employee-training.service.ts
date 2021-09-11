import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeTraining } from '../../models/EmployeeTraining';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTrainingService {

  private baseUrl = environment.baseUrl;

  constructor(private http :HttpClient) { }

  getEmployeeProject(id:Number):Observable<EmployeeTraining>{
    return this.http.get<EmployeeTraining>( `${this.baseUrl}Employee-Trainings/${id}`)
  }
  getALLEmployeeProjects():Observable<EmployeeTraining[]>{
   return this.http.get<EmployeeTraining[]>( `${this.baseUrl}Employee-Trainings`)
 }
 saveEmployeeProject(e:EmployeeTraining,EmployeeId:number):Observable<EmployeeTraining[]>{
   return this.http.post<EmployeeTraining[]>( `${this.baseUrl}Employee-Trainings/${EmployeeId}`,e)
 }
 updateEmployeeProject(e:EmployeeTraining):Observable<EmployeeTraining[]>{
   return this.http.post<EmployeeTraining[]>( `${this.baseUrl}Employee-Trainings`,e)
 }
 deleteDepartment(id:Number):Observable<any>{
  return this.http.delete<any>( `${this.baseUrl}Employee-Trainings/${id}`,{observe:"body"})
}
}
