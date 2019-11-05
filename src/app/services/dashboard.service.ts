import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

declare const window;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = window['hrdb_service_url'] || '//www.wavemakeronline.com/run-9j6vkhqb0r/HRScaffold_master';
  // tslint:disable-next-line: max-line-length
  budgetUrl = `${this.baseUrl}/services/hrdb/queryExecutor/queries/TotalBudget?page=1&size=20`;
  // tslint:disable-next-line: max-line-length
  departmentCount = `${this.baseUrl}/services/hrdb/queryExecutor/queries/NoOfDepartment?page=1&size=20`;
  // tslint:disable-next-line: max-line-length
  employeeList = `${this.baseUrl}/services/hrdb/queryExecutor/queries/SearchEmployees?page=1&size=20`;

  constructor( private http: HttpClient ) { }

  getBudget(): Observable<any> {
    return this.http.get<any>(this.budgetUrl);
  }

  getDepartmentCount(): Observable<any> {
    return this.http.get<any>(this.departmentCount);
  }

  getEmployeeList(): Observable<any> {
    return this.http.get<any>(this.employeeList);
  }
}
