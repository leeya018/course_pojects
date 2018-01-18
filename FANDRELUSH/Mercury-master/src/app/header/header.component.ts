import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() ClickMenu: EventEmitter<string> = new EventEmitter();

  openMenu(): void {
    this.ClickMenu.emit('');
  }

  ngOnInit() {
  }

}
