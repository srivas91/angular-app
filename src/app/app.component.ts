import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Employee } from 'src/Employee';
import { EmployeeService } from 'src/employee.service';
import * as mydata from 'src/app/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employee?:Employee[];
  page = 1;
  filterName:string="";
  // count = 0;
  // tableSize = 12;
  // tableSizesArr = [4, 8, 12];
  title = 'firstpro';
  subject='HTML';
  name="priyadharshini";
  pass="pass123";
  mydata=false;
  message="";
  emp?:any;
  onSubmit(f:any)
  {
     console.log(f.value);
  }

  reactiveForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl(),
    email: new FormControl(),
  })
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
    this.emp=mydata;
    console.log(this.emp);
  }
  //  getEmployee(){
  //    this.employeeService.getEmployee().subscribe(data=>{
  //      this.emp=data;
  //    })
  //  }
  // getEmployee(){
  //   this.employee=this.employeeService.getEmployee();
  // }
   }
