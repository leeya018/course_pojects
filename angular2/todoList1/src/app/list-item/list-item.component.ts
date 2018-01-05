import { Component, OnInit,Input } from '@angular/core';
import { ListItem } from '../listItem';
import moment from 'moment/src/moment';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item: ListItem
  color: string;
  firstChar: string;
  constructor() { }

  ngOnInit() {
  }
  convertItem(time) {
    let timeStr = moment(time, "YYYYMMDD").fromNow();
    this.color =  timeStr.charAt(0)==="i"?"gray":"red"
    return timeStr;
  }

}
