import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ForgetPassComponent } from './pages/forget-pass/forget-pass.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';

const routes: Routes = [
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
    path:'forget-password',
    component:ForgetPassComponent
  },
  {
    path:'reset-pass',
    component:ResetPassComponent
  },
  {
    path:'change-pass',
    component:ChangePassComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
