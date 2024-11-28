import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductList } from './product.model';
import { first } from "rxjs/operators";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    standalone: false
})
export class ProductComponent implements OnInit {
  productList$!: ProductList[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList();
  }

  productList() {
    this.productService.getProducts().subscribe(
      (res) => this.productList$ = res.data
    );
  }

  deleteProduct(id: number) {
    this.productService
      .deleteProduct(id)
      .pipe(first())
      .subscribe(() => {
        this.productList()
      })
  }
}
