import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Employee } from './classes/employee';
import { MessageService } from './message.service';

@Injectable()
export class EmployeeService {

  // TODO update URL
  private employeesUrl = 'http://127.0.0.1:5000/employees/';
  private isCached = false;
  private cachedData: any = null;

  constructor(private http: HttpClient, private messageService: MessageService) {  }

  getEmployees (): Observable<any> {
    if (!this.isCached) {
      this.cachedData = this.http.get<any>(this.employeesUrl).pipe(
        tap(employees => console.log('fetched employees')),
        catchError(this.handleError('getEmployees', []))
      );
    }
    return this.cachedData;
  }

  getEmployee (id: string): Observable<any> {
    const url = `${this.employeesUrl}${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log('fetched employee id=${id}')),
      catchError(this.handleError<Employee>('getEmployee id=${id}'))
    );
  }

  // TODO updateEmployee (employee:Employee)

  // TODO addEmployee (employee: Employee) Observable<Employee>

  // TODO deleteEmployee (employee: Employee)

    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
      };
    }

    private log(message: string) {
      this.messageService.add('Hero Service: ' + message);
    }
}
