import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Array<{ id: number,
                    description: string,
                    days: string,
                    fromWho: string,
                    unread: string,
                    imageUrl: string }> = Array(
    { 'id': 0,
     'description': 'Hey You! It’s me again :-) I attached new (...)',
      days: '5 minutes ago',
      fromWho: 'Nina Jones',
      unread: 'unread',
      imageUrl: 'https://i.pinimg.com/736x/2b/ab/d6/2babd6371bb1ce1126da699da2285d19--long-brunette-hairstyles-medium-length-hairstyles.jpg' },
    { 'id': 1,
     'description': 'Hey! I attached some new PSD files for (...)',
      days: 'About 20 Hours ago',
      fromWho: 'Nina Jones',
      unread: 'unread',
      imageUrl: 'https://i.pinimg.com/736x/2b/ab/d6/2babd6371bb1ce1126da699da2285d19--long-brunette-hairstyles-medium-length-hairstyles.jpg' },
    { 'id': 2,
     'description': 'Good morning, you are fired!',
      days: '2 days ago',
      fromWho: 'James Smith',
      unread: '',
      imageUrl: 'https://pbs.twimg.com/profile_images/606861746800721921/QuNuX5m7.jpg' },
    { 'id': 3,
      'description': 'Hello! Could You bring me coffee please?',
      days: 'about 2 weeks ago',
      fromWho: 'James Smith',
      unread: '',
      imageUrl: 'https://pbs.twimg.com/profile_images/606861746800721921/QuNuX5m7.jpg' }
);

  constructor() { }

  ngOnInit() {
  }

}
