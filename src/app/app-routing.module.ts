import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ParentComponent } from './parent/parent.component';

const routes:Routes=[
  {path:'employee',component:EmployeeComponent},
  {path:'parent',component:ParentComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
