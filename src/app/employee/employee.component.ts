import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
emp_id:number|any;
emp_name:string|any;
emp_salary:number|any;
onSubmit(f:any){
//this.emp_name= f;
console.log(f.value);
}
  constructor() { }

  ngOnInit(): void {
  }

}
