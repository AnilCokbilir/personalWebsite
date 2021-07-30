import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  pc = ['./assets/img/pc1.jpg', './assets/img/pc2.jpg', './assets/img/pc3.jpg', './assets/img/pc4.jpg',]
  constructor() { }

  ngOnInit(): void {
  }

}
