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
  toggle: string
  padding:string="0"

  onNotify(message:string):void {
    this.toggle = (this.toggle === "none") ? "block" : "none";
    this.padding = (this.padding === "0")?"3":"0";

  }
}
