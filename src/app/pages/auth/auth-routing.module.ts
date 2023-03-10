import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'login',
        component:LoginComponent,
        data: { animation: 'login' }

      },
      {
        path:'signup',
        component:SignupComponent,
        data: { animation: 'signup' }

      }
    ]


  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
