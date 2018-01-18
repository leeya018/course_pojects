import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  leftImage: any = '../../assets/images/Your-sales.png';
  rightImage: any = '../../assets/images/Active-Users-kopia.png';
  constructor() { }

  ngOnInit() {
  }

}
