import {Component, Inject, forwardRef} from '@angular/core';
import {Projects} from '../app/services/projects.service';
import {Material2Dialogs} from './modules/material2-dialogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public projects: Array<any>;
  public newTask: string;

  constructor(public projectsData: Projects,
              public mdDialogs: Material2Dialogs) {
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

  /**
   * Delete project
   * @param project
   */
  removeProject(project) {
    this.mdDialogs
      .confirm({
          title: 'Deleting Project',
          message: 'Are you sure you want to delete project ' + project.name + '?',
          okButton: 'Yes',
          cancelButton: 'No'
        }
      )
      .subscribe(res => {
        if (res) {
          this.projectsData.remove(project.id).then(data => {
            console.log(data);
            this.projects.forEach((proj, i) => {
              if (proj.id == project.id) {
                this.projects.splice(i, 1);
              }
            });
          })
        }
      });
  }

  /**
   * Add new Task to the current project
   */
  addTask(project) {
    if (project.newTask) {
      project.tasks.push({
        id: this.projectsData.getId(),
        name: project.newTask,
        completed: false
      });

      project.newTask = '';
      this.projectsData.save(project).then(data => {
        // project.newTask = '';
      });

    } else {

    }
  }

  /**
   * Check if at least one task is completed
   * @param project
   * @returns {boolean}
   */
  checkForCompletedTasks(project) {
    let condition = false;

    project.tasks.forEach(task => {
      if (task.completed) {
        condition = true;
      }
    });

    return condition;
  }

  /**
   * Add task on key enter
   * @param event
   * @param project
   */
  private addTaskOnKeyEnterPress(event: any, project) {
    if (event.keyCode == 13) {
      this.addTask(project)
    }
  }

  /**
   * Remove task from current project
   * @param Task
   */
  removeTask(project, theTask) {
    project.tasks.forEach((task, i) => {
      if (task.id == theTask.id) {
        project.tasks.splice(i, 1);
        this.projectsData.save(project).then(data => {
          // project.newTask = '';
        });
      }
    });
  }
}
