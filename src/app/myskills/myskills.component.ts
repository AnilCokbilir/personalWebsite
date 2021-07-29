import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {
  skill = ['./assets/img/js.png', './assets/img/angular.png', './assets/img/html.png', './assets/img/scrum.png', './assets/img/git.png', './assets/img/design.png', './assets/img/api.png', './assets/img/test.png', './assets/img/database.png',];
  skillname = ['Javascript', 'Angular', 'HTML / CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test automation', 'Databases',]
  i = 0;

  constructor() { }

  ngOnInit(): void {
    this.skills();
  }

  skills() {
    this.skill.forEach((images) => {
      this.i = this.skill.length;
      this.i++;
      console.log(images);

    })
  }
}