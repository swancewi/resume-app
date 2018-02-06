import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Project } from './classes/projects';
import { MessageService } from './message.service';

@Injectable()
export class ProjectService {

  private projectsUrl = 'http://127.0.0.1:5000/projects/';

  constructor(private http: HttpClient, private messageService: MessageService) {  }

  getProjects (): Observable<Project> {
    return this.http.get<Project>(this.projectsUrl).pipe(
      tap(_ => this.log('fetched projects')),
      catchError(this.handleError<Project>('getProjects'))
    );
  }

  getEmployeeProjects (id: string): Observable<any> {
    const url = `${this.projectsUrl}employees/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log('fetched projects of employee id=${id}')),
      catchError(this.handleError<any>('getEmployeeProjects id=${id}'))
    );
  }

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
