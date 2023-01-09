import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductsRoutingModule } from './products/products-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { SplitTextModule } from 'src/app/core/pipes/split-text/split-text/split-text.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatProductsComponent } from './products/pages/creat-products/creat-products.component';
import { PreviewProductsComponent } from './products/pages/preview-products/preview-products.component';
import { EditProductComponent } from './products/pages/edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreatProductsComponent,
    PreviewProductsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ProductsRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    SplitTextModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
