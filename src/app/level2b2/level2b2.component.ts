import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level2b2',
  templateUrl: './level2b2.component.html',
  styleUrls: ['./level2b2.component.css']
})
export class Level2b2Component {

  constructor(private router: Router) { }

  clickedDirection(direction: string) {
    if (direction === 'left') {
      this.router.navigate(['level2/a/1'])
    }
    if (direction === 'right') {
      this.router.navigate([''])
    }
  }

}
