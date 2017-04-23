import {Component, Inject, forwardRef} from '@angular/core';
import {Projects} from '../app/services/projects.service';
import {FormControl} from '@angular/forms';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public projects: Array<any>;
  projectTitleControl = new FormControl();

  project: any;
  public newTask: string;
  public editingTask;


  constructor(public projectsData: Projects) {
    this.getProjects();
  }


  /**
   * Get all projects from storage
   */
  getProjects() {
    this.projectsData.get().then((data) => {
      this.projects = data;
    });
  }

  /**
   * Save project
   * @param callback a callback of the form (item)
   */
  saveProject(project) {
    this.projectsData.save(project).then(data => {
      //Do something when project was saved
    })
  }

  /**
   * Add new project
   */
  addNewProject() {
    let project = {
      name: '',
      tasks: []
    };

    this.projectsData.save(project).then(data => {
      console.log(data);
      this.projects.push(data);
    })
  }

  removeProject(project) {
    this.projectsData.remove(project.id).then(data => {
      console.log(data);
      this.projects.forEach((proj, i) => {
        if (proj.id == project.id) {
          this.projects.splice(i, 1);
        }
      });
    })
  }
}
