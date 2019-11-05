import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DepartmentsComponent} from './departments/departments.component';
import {EmployessComponent} from './employess/employess.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'employees', component: EmployessComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
