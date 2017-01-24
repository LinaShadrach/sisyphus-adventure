import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-level1b',
  templateUrl: './level1b.component.html',
  styleUrls: ['./level1b.component.css']
})
export class Level1bComponent {

  constructor(private router: Router) { }
  clickedDirection(direction: string){
    if(direction === 'left'){
      this.router.navigate(['level2/b/1']);
    }
    if(direction === 'right'){
      this.router.navigate(['level2/b/2']);
    }
  }

}
