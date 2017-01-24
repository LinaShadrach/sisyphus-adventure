import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level2a1',
  templateUrl: './level2a1.component.html',
  styleUrls: ['./level2a1.component.css']
})
export class Level2a1Component  {

  constructor(private router: Router) { }

  clickedDirection(direction: string) {
    if (direction === 'left') {
      this.router.navigate(['level2/b/1']);
    }
    if (direction === 'right') {
      this.router.navigate(['level2/b/2']);
    }
  }



}
