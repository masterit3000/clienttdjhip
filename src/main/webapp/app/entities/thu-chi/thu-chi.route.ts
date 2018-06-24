import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ThuChiComponent } from './thu-chi.component';
import { ThuChiDetailComponent } from './thu-chi-detail.component';
import { ThuChiPopupComponent } from './thu-chi-dialog.component';
import { ThuChiDeletePopupComponent } from './thu-chi-delete-dialog.component';

export const thuChiRoute: Routes = [
    {
        path: 'thu-chi',
        component: ThuChiComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clienttdjhipApp.thuChi.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'thu-chi/:id',
        component: ThuChiDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clienttdjhipApp.thuChi.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const thuChiPopupRoute: Routes = [
    {
        path: 'thu-chi-new',
        component: ThuChiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clienttdjhipApp.thuChi.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'thu-chi/:id/edit',
        component: ThuChiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clienttdjhipApp.thuChi.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'thu-chi/:id/delete',
        component: ThuChiDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clienttdjhipApp.thuChi.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
