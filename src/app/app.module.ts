import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { Level1aComponent } from './level1a/level1a.component';
import { Level1bComponent } from './level1b/level1b.component';
import { Level2a1Component } from './level2a1/level2a1.component';
import { Level2a2Component } from './level2a2/level2a2.component';
import { Level2b2Component } from './level2b2/level2b2.component';
import { Level2b1Component } from './level2b1/level2b1.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Level1aComponent,
    Level1bComponent,
    Level2a1Component,
    Level2a2Component,
    Level2b2Component,
    Level2b1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
