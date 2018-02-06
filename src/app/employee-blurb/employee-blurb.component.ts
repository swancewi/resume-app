import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-employee-blurb',
  templateUrl: './employee-blurb.component.html',
  styleUrls: ['./employee-blurb.component.css']
})
export class EmployeeBlurbComponent implements OnInit {

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
      });
  }

}
