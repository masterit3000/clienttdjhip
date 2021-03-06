import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { MessagesDemoComponent } from './messagesdemo.component';

export const messagesDemoRoute: Route = {
    path: 'messages',
    component: MessagesDemoComponent,
    data: {
         
        pageTitle: 'primeng.messages.messages.title'
    },
    canActivate: [UserRouteAccessService]
};
