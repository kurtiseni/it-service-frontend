import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../../../services/product.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

  productForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      serialDevice: ['', Validators.required],
      brand: ['', Validators.required],
      template: ['', Validators.required],
      description: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      warrantyExpiryDate: ['', Validators.required],
      additionalNotes: ['', Validators.required],
      password: ['', Validators.required],
      customerName: ['', Validators.required],
      customerSurname: ['', Validators.required],
      fullAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fiscalCode: ['', Validators.required],
      vatNumber: ['', Validators.required],
      pec: ['', Validators.required],
      sdiCode: ['', Validators.required],
      userId: [4, Validators.required],
    })
  }

  get form() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.productForm.invalid) return

    this.loading = true;
    this.productService
      .addProduct(this.productForm.value)
      .pipe(first())
      .subscribe({
        next: () => this.router.navigate(['/products']),
        complete: () => this.loading = false
      })

  }

}
