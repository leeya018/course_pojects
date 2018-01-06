import { Injectable } from '@angular/core';
import { ITEMS } from './mock-todolist';
import { MESSAGES } from './mock-messagelist';
import { ACTIVITIES } from './mock-activitieslist';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ListItem } from './listItem';

@Injectable()
export class ListService {

  constructor() { }

  getTasks():ListItem[] {
    return ITEMS;
  }
  getMassages(): ListItem[] {
    return MESSAGES
  }
  getActivities(): ListItem[] {
    return ACTIVITIES
   }
}
