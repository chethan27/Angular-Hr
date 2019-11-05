import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent implements OnInit {
  listOfEmployees: [] ;
  flag: boolean = true;

  constructor( private dashboardservice: DashboardService) { }

  ngOnInit() {
    this.dashboardservice.getEmployeeList().subscribe(employee => {
      this.listOfEmployees = employee.content;
    });
  }

  toggleView(): void {
    this.flag = !this.flag;
  }

}
