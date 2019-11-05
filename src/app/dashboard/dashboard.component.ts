import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

declare const d3, nv;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  budget ;
  departmentCount ;
  noOfEmployees ;
  listOfEmployees: [] ;

  constructor( private dashboardservice: DashboardService ) { }

  ngOnInit() {
    this.dashboardservice.getBudget().subscribe(budget => {
      this.budget = budget.content[0].C1;
    });
    this.dashboardservice.getDepartmentCount().subscribe(departmentCount => {
      this.departmentCount = departmentCount.content[0].C1;
    });
    this.dashboardservice.getEmployeeList().subscribe(employee => {
      this.noOfEmployees = employee.numberOfElements;
      this.listOfEmployees = employee.content;
    });
     const exampleData = () => {
      return [
        {
          'label': 'engineering',
          'value': 1936760
        },
        {
          'label': 'General And Admin',
          'value': 1452570
        },
        {
          'label': 'Marketing',
          'value': 1129777
        },
        {
          'label': 'Professional Services',
          'value': 806984
        },
        {
          'label': 'Sales',
          'value': 2743744
        },
      ];
    };
    nv.addGraph(function() {
      const width = 350, height = 350;
      const chart = nv.models.pieChart()
          .x(function(d) { return d.label; })
          .y(function(d) { return d.value; })
          .showLabels(true)     // Display pie labels
          .labelThreshold(.05)  // Configure the minimum slice size for labels to show up
          .labelType('percent') // Configure what type of data to show in the label. Can be "key", "value" or "percent"
          .donut(true)          // Turn on Donut mode. Makes pie chart look tasty!
          .donutRatio(0.35)     // Configure how big you want the donut hole size to be.
          .width(width)
          .height(height)
          ;
        d3.select('#chart')
            .datum(exampleData())
            .transition().duration(350)
            .call(chart);
      return chart;
    });
  }

}
