import { Component } from '@angular/core';

@Component({
  selector: 'my-feature',
  template: `
    <form>
        <input name="name" type="text" [(ngModel)]="name" />
    </form>
  `,
})
export class FeatureComponent  { name = 'Angular'; }
