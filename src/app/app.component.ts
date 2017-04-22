import {Component} from '@angular/core';
import {Projects} from '../app/services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public projects: Array<any>;
  public cardWith: string;
  public portraitOrientation: boolean;
  public dH: number;
  public dW: number;

  project: any;
  public newTask: string;
  public editingTask;

  constructor(public projectsData: Projects) {
    this.cardWith = '200px';
    this.getProjects();
  }

  /**
   * Get card width
   * @returns {string}
   */
  getCardWidth() {
    let currentWidth = 1200;

    if (currentWidth < 400) {
      return (currentWidth / 2 - 10) + 'px'
    }
    if (currentWidth < 700) {
      return (currentWidth / 3 - 10) + 'px'
    }
    if (currentWidth < 1000) {
      return (currentWidth / 4 - 10) + 'px'
    }
    if (currentWidth < 1200) {
      return (currentWidth / 5 - 10) + 'px'
    }
    if (currentWidth > 1200) {
      return (currentWidth / 5 - 10) + 'px'
    }
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
  saveProject(callback: (item: any) => any) {
    this.projectsData.save(this.project).then(data => {
      callback(data);
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

    this.projectsData.save(project).then(data => {
      console.log(data);
      this.projects.push(data);
    })
  }
}
