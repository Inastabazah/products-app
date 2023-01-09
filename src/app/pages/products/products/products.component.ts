import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AppComponentBase } from 'src/app/core/base/app-component-base';
import { Product } from 'src/app/core/iterfaces/products.interface';
import { ProductService } from 'src/app/core/servises/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class  ProductsComponent extends AppComponentBase implements OnInit ,AfterViewInit{
  constructor(private router:Router , injector:Injector,private _productService:ProductService){
super(injector)

  }
  displayedColumns: string[] = ['select', 'productName','category', 'description', 'quantity', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  dataSource = new MatTableDataSource<Product>([]);
  selection = new SelectionModel<any>(true, []);


  onDeleteRowClicked(id:string){
    this._productService.delete(id)

  }

  onEditRowClicked(id:string){
    this.router.navigate(['/products/edit-products'],{
      queryParams:{
        id:id
      }
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }




  ngOnInit(): void {
this.getAllProducts()
  }


  getAllProducts(){
this._productService.getAll().subscribe((result)=>{
 this.dataSource=new MatTableDataSource (result);
this.dataSource.paginator=this.paginator
this.dataSource._updateChangeSubscription()


})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onAddClicked(){
this.router.navigate(['/products/creat-products'])
  }
  onRowClicked(){
    this.router.navigate(['/products/preview-products'])

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
