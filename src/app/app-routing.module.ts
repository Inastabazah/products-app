import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthGuard } from './core/guards/not-auth.guard';
import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
  ,
  {
    path: 'auth',
    loadChildren :()=> import('./pages/auth/auth.module').then(m=>m.AuthModule),
    //canLoad:[NotAuthGuard]

  },
  {
    path: 'home',
    loadChildren :()=> import('./pages/home/home.module').then(m=>m.HomeModule ),
    //canLoad:[AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren :()=> import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule),
    //canLoad:[AuthGuard]
  },
  {
    path: 'products',
    loadChildren :()=> import('./pages/products/products.module').then(m=>m.ProductsModule),
    //canLoad:[AuthGuard]
  },


  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
