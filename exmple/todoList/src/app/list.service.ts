import { Injectable } from '@angular/core';
import { ITEMS } from './mock-todolist';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ListItem } from './listItem';
@Injectable()
export class ListService {

  constructor() { }

  getItems(): Observable<ListItem[]> {
    return of(ITEMS)
  }
}
