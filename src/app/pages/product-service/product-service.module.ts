import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceComponent } from './product-service.component';
import { AddEditServiceComponent } from './add-edit/add-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProductServiceComponent,
  },
  {
    path: 'add',
    component: AddEditServiceComponent,
  },
  {
    path: 'edit/:id',
    component: AddEditServiceComponent,
  },
];

@NgModule({
  declarations: [ProductServiceComponent, AddEditServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductServiceModule {}
