import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
    {
      path:'',redirectTo:'home',pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'books-list',
        component:BooksListComponent
    },
    {
      path:'cart',
      component:CartComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
