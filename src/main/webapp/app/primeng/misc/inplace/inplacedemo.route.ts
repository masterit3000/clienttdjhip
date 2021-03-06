import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { InplaceDemoComponent } from './inplacedemo.component';

export const inplaceDemoRoute: Route = {
    path: 'inplace',
    component: InplaceDemoComponent,
    data: {
         
        pageTitle: 'primeng.misc.inplace.title'
    },
    canActivate: [UserRouteAccessService]
};
