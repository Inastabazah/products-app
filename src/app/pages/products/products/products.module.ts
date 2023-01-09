import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [



  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule

  ]
})
export class ProductsModule { }
