import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './features/auth/pages/register-page/register-page.component';
import { PageNotFoundComponent } from './features/auth/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'register',pathMatch:'full'
    },
    {
        path:'login',
        component:LoginPageComponent
    },
    {
        path:'register',
        component:RegisterPageComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];
