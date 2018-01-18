import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  menuState = true;
  cssClassName: string;
  title = 'app';

  onMenuClick(data): void {
    this.menuState = !this.menuState;
    this.cssClassName = this.menuState ? '' : 'moved';
  }
}
