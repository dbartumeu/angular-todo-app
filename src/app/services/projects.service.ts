import {Injectable} from '@angular/core';
import * as localforage from 'localforage';

@Injectable()
export class Projects {
  storage: any;
  data: any;
  public projectsArr: Array<any>;

  constructor() {
    localforage.config({
      name: '_angularTodoDb',
    });
    this.storage = localforage;


  }

  /**
   * Generate a unique Id for each project
   * @returns {string}
   */
  getId = function () {
    return Date.now() + '';
  };

  /**
   * Get a Project or a list of projects from storage
   * @param id
   * @returns {Promise<Object>|Promise<Object[]>} Object if id is not null, array of projects otherwise
   */
  get(id = null) {
    if (id) {
      return this.storage.getItem(id + '');
    } else {
      this.projectsArr = [];
      return this.storage.iterate((value, key, iterationNumber) => {
        this.projectsArr.push(value);
      }).then(() => {
        return this.projectsArr;
      });
    }
  }

  /**
   * Save project
   * @param data
   * @returns {Promise<Promise<any>}
   */
  save(data) {
    if (data.id) {
      return this.storage.ready().then(() => this.storage.setItem(data.id + '', data));
    } else {
      data.id = this.getId();
      return this.storage.ready().then(() => this.storage.setItem(data.id + '', data));
    }
  }

  /**
   * Remove Project
   * @param id
   * @returns {Promise<string>}
   */
  remove(id) {
    return this.storage.ready().then(() => this.storage.removeItem(id + '').then(() => {
      return '';
    }));
  }

}
