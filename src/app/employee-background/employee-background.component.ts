import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../classes/employee';
import { $$, $ } from 'protractor';

@Component({
  selector: 'app-employee-background',
  templateUrl: './employee-background.component.html',
  styleUrls: ['./employee-background.component.css']
})
export class EmployeeBackgroundComponent implements OnInit {

  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(hero => {
        this.employee = hero.result[0];
        console.log('employee', this.employee);
      });
  }

}
