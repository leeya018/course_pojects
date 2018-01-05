import { ListService } from './../list.service';
import { Component, OnInit,Input } from '@angular/core';
import { ListItem } from '../listItem';
import moment from 'moment/src/moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: ListItem[]
  @Input() title: string
  futureTasks:number

  constructor() {



  }
  ngOnInit() {
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
