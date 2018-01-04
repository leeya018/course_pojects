import { ListService } from './../list.service';
import { Component, OnInit,Input } from '@angular/core';
import { ListItem } from '../listItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: ListItem[]
  constructor() {

  }
  ngOnInit() {
  }


}
