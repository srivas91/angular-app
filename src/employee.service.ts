import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
   providedIn:'root' 
})
export class EmployeeService{
   //baseUrl:String="http://localhost:3000/";
//    baseUrl:String="F:\Priya\firstpro\src\app\data.json";
  
    constructor(private http:HttpClient){}
    //  getEmployee():Observable<Employee[]>{
    //      return this.http.get<Employee[]>(this.baseUrl+'employee');
    //  }
   //  getEmployee(){
   //    const emp:Employee[]=mydata;
   //    return emp;
   //  }
    
}