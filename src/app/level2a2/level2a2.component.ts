import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level2a2',
  templateUrl: './level2a2.component.html',
  styleUrls: ['./level2a2.component.css']
})
export class Level2a2Component{

  constructor(private router: Router) { }

  clickedDirection(direction: string) {
    if (direction === 'left') {
      this.router.navigate(['level2/a/1'])
    }
    if (direction === 'right') {
      this.router.navigate(['level2/b/2'])
    }
  }

}
