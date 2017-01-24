import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level1a',
  templateUrl: './level1a.component.html',
  styleUrls: ['./level1a.component.css']
})
export class Level1aComponent {

  constructor(private router: Router) {}

  clickedDirection(direction: string) {
    if (direction === 'left') {
      this.router.navigate(['level2/a/1'])
    }
    if (direction === 'right') {
      this.router.navigate(['level2/a/2'])
    }
  }

}
