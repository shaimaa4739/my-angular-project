import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { pagelayoutResolver } from './core/resolvers/pagelayout.resolver';
import { Pagelayout } from './core/enums/pagelayout';

export const routes: Routes = [
    {
        path:'',
        loadChildren:()=>import('./features/auth/auth.module').then(m=>m.AuthModule),
        resolve:{
            layout:pagelayoutResolver(Pagelayout.UnAuthorized)
        }
    },
    {
        path:'dashboard',
        loadChildren:()=>import('./features/dashboard/dashboard.module').then(m=>m.DashboardModule),
        resolve:{
            layout:pagelayoutResolver(Pagelayout.Authorized)
        }
    },
    {
        path:'**',
        component:PageNotFoundComponent,
        resolve:{
            layout:pagelayoutResolver(Pagelayout.Error)
        }
    }
];
