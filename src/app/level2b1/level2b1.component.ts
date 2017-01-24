import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level2b1',
  templateUrl: './level2b1.component.html',
  styleUrls: ['./level2b1.component.css']
})
export class Level2b1Component {

  constructor(private router: Router) { }

  clickedDirection(direction: string) {
    if (direction === 'left') {
      this.router.navigate(['level2/a/2'])
    }
    if (direction === 'right') {
      this.router.navigate(['level2/b/2'])
    }
  }


}
