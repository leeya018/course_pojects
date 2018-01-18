import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activitys: Array<{ id: number,
  name: string, action: string, days: string, fromWho: string, imageUrl: string }> = Array(
    { 'id': 0,
      name: 'Free UI Kit',
      'action': 'added a new project',
      days: '5 days delay',
      fromWho: 'Nina Jones',
      imageUrl: `https://i.pinimg.com/736x/2b/ab/d6/2babd6371bb1ce1126da699da2285d19--long-brunette-hairstyles-medium-length-hairstyles.jpg` },
    { 'id': 1,
      name: 'Free PSD Template',
      'action': 'commented project',
      days: '2 days delay',
      fromWho: 'James Smith',
      imageUrl: 'https://pbs.twimg.com/profile_images/606861746800721921/QuNuX5m7.jpg' },
    { 'id': 2,
      name: 'Symu Website',
      'action': 'completed task',
      days: '5 days left',
      fromWho: 'Alex Clooney',
      imageUrl: 'https://www.aboutface.ca/wp-content/uploads/avatars/19/867672cb9a85519c5e5d8999d23cf254-bpfull.jpg' },
    { 'id': 3,
      name: 'Free PSD (...)',
      'action': 'added a new project',
      days: '2 days left',
      fromWho: 'Alexandra Spears',
      imageUrl: 'https://www.aboutface.ca/wp-content/uploads/avatars/19/867672cb9a85519c5e5d8999d23cf254-bpfull.jpg' }
);


  constructor() { }

  ngOnInit() {
  }

}
