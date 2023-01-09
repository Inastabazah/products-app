import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Product } from '../../iterfaces/products.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  dbPath='/products'
productsRef:AngularFireList<Product>

  constructor(private angularFireDataBase: AngularFireDatabase) {

    this.productsRef=angularFireDataBase.list(this.dbPath)
   }
getAll(): Observable<any>{
return this.productsRef.snapshotChanges().pipe(
  map(changes=>
    changes.map(obj=>({id:obj.payload.key , ...obj.payload.val()}))  )
)
}

getById(id:string){
 return  this.angularFireDataBase.object('/products'+ id).valueChanges();
}



create(product:Product){
 return this.productsRef.push(product)

}

update(key:string,product:Product){

return this.productsRef.update(key,product)

}

delete(key:string){
  return this.productsRef.remove(key)

}

deleteAll(){
  return this.productsRef.remove()

}
  }
