import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListService } from './list.service';
import { ListsContainerComponent } from './lists-container/lists-container.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ListsContainerComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
