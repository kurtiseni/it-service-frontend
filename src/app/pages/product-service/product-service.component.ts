import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductServiceModel } from './product-service.model';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
})
export class ProductServiceComponent implements OnInit {
  serviceList$!: ProductServiceModel[];

  constructor(private prodSerService: ProductServiceService) {}

  ngOnInit(): void {
    this.serviceList();
  }

  serviceList() {
    this.prodSerService.getServices().subscribe(
      (res) => {
        this.serviceList$ = res.data;
      }
    );
  }
}
