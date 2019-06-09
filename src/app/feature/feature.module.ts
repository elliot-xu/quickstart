import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeatureComponent }  from './feature.component';
import { FeatRoutingModule } from './feature.routing';

@NgModule({
  imports:      [ CommonModule, FormsModule, FeatRoutingModule ],
  declarations: [ FeatureComponent ]
})
export class FeatureModule { }
