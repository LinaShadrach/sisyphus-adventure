import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Level1aComponent } from './level1a/level1a.component';
import { Level1bComponent } from './level1b/level1b.component';
import { Level2a1Component } from './level2a1/level2a1.component';
import { Level2a2Component } from './level2a2/level2a2.component';
import { Level2b1Component } from './level2b1/level2b1.component';
import { Level2b2Component } from './level2b2/level2b2.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'level1/a',
    component: Level1aComponent
  },
  {
    path: 'level1/b',
    component: Level1bComponent
  },
  {
    path: 'level2/a/1',
    component: Level2a1Component
  },
  {
    path: 'level2/a/2',
    component: Level2a2Component
  },
  {
    path: 'level2/b/1',
    component: Level2b1Component
  },
  {
    path: 'level2/b/2',
    component: Level2b2Component
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
