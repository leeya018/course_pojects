import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Array<{ id: number, letter: string, description: string, days: string, delay: string }> = Array(
    { 'id': 0, 'letter': 'N', 'description': 'New website for Symu.co', days: '5 days delay', delay: 'delay' },
    { 'id': 1, 'letter': 'F', 'description': 'Free business PSD Template', days: '2 days delay', delay: 'delay' },
    { 'id': 2, 'letter': 'N', 'description': 'New logo for JCD.pl', days: '5 days left', delay: '' },
    { 'id': 3, 'letter': 'F', 'description': 'Free Icons Set Vol.3', days: '2 days left', delay: '' }
);

  constructor() { }

  ngOnInit() {
  }

}
