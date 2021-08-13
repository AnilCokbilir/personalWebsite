import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  resp = false;
  constructor() { }

  ngOnInit(): void {
  }

  menu() {
    if (this.resp == false) {
      this.resp = true;
      console.log('true');
    } else {
      this.resp = false;
      console.log('false');
    }
  }

}
