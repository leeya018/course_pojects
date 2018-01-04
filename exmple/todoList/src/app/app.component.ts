import { ListService } from './list.service';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ListItem } from './listItem';
import moment from 'moment/src/moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  items: ListItem[] = []
  futureTasks:number

    constructor(private listService: ListService) {
     }
  ngOnInit() {
    this.listService.getItems().subscribe(items => this.items = items)
    this.updateFutureTasks()
  }
  updateFutureTasks() {
    let timeStr, count = 0;
    for (let item of this.items) {
      timeStr = moment(item.time, "YYYYMMDD").fromNow();
      if (timeStr.charAt(0) === "i")
        count++;
    }
    this.futureTasks = count
  }
}
