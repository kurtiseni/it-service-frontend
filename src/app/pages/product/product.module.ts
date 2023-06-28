import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@NgModule({
  declarations: [ProductComponent, AddEditProductComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
