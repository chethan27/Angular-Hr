import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';
  
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  listOfEmployees: [];

  constructor( private dashboardservice: DashboardService) { }

  ngOnInit() {
    this.dashboardservice.getEmployeeList().subscribe(employee => {
      this.listOfEmployees = employee.content;
    });
  }

}
