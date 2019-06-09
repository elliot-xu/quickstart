import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/feature">Feature</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
