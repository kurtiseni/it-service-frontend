import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  productList$!: ProductModel[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList();
  }

  productList() {
    this.productService.getProducts().subscribe(
      (res) => this.productList$ = res.data
    );
  }
}
