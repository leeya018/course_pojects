import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menu: Array<{ id: number, icon: string, name: string }> = Array(
    { 'id': 0, 'icon': 'home', 'name': 'Home' },
    { 'id': 1, 'icon': 'view_stream', 'name': 'Workflow' },
    { 'id': 2, 'icon': 'show_chart', 'name': 'Statistic' },
    { 'id': 3, 'icon': 'perm_contact_calendar', 'name': 'Calendar' },
    { 'id': 4, 'icon': 'perm_identity', 'name': 'Users' },
    { 'id': 5, 'icon': 'settings', 'name': 'Settings' },
);

  ngOnInit() {
  }

}
