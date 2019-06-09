import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';

const route = [
    {
        path: '',
        component: FeatureComponent,
    }
];


export const FeatRoutingModule = RouterModule.forChild(route);
