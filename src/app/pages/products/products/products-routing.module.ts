import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatProductsComponent } from './pages/creat-products/creat-products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { PreviewProductsComponent } from './pages/preview-products/preview-products.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [{
  path:'',
  redirectTo:'products',
  pathMatch:'full'
},
{
  path:'all-products',
  component:ProductsComponent,
},
{
  path:'creat-products',
  component:CreatProductsComponent,
},
{
  path:'preview-products',
  component:PreviewProductsComponent,
},
{
  path:'edit-products',
  component:EditProductComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
