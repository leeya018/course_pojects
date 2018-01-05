import { ListService } from '../list.service';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ListItem } from '../listItem';
import moment from 'moment/src/moment';

@Component({
  selector: 'app-lists-container',
  templateUrl: './lists-container.component.html',
  styleUrls: ['./lists-container.component.css']
})
export class ListsContainerComponent implements OnInit {
  tasksTitle = 'tasks List';
  massagesTitle = 'Massages  List';
  activitiesTitle = 'Activities List';

  tasks: ListItem[] = []
  massages: ListItem[] = []
  activities: ListItem[] = []


    constructor(private listService: ListService) {
     }
  ngOnInit() {
    this.tasks = this.listService.getTasks()
    this.massages = this.listService.getMassages()
    this.activities = this.listService.getActivities()
  }


}
