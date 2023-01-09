import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path:'',
        component:HomeComponent
      }
      ])
  ]
})
export class HomeModule { }
