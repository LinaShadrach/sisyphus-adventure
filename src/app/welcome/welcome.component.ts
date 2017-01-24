import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) { }
  clickedDirection(direction: string){
    console.log(direction);
    if(direction==="left"){
      this.router.navigate(['level1/a']);
    }
    if(direction==="right"){
      this.router.navigate(['level1/b']);
    }
  }


}
