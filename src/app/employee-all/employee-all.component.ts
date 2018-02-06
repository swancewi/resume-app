import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css']
})
export class EmployeeAllComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(employees => {
        this.employees = employees.result;
      });
  }

}
