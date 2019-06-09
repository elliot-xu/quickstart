import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const route = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'feature',
        loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
    }
];

export const AppRoutingModule = RouterModule.forRoot(route);
