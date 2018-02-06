import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Project } from '../classes/projects';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-employee-projects',
  templateUrl: './employee-projects.component.html',
  styleUrls: ['./employee-projects.component.css']
})
export class EmployeeProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService, private route: ActivatedRoute
) { }
  ngOnInit() {
    this.getProjects();
  }

  getProjects (): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getEmployeeProjects(id)
      .subscribe(projects => {
        this.projects = projects.result;
        console.log('projects', this.projects);
      });
  }

}
