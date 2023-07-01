import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../../../services/product.service";
import { first } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

  productForm!: FormGroup;
  submitted = false;
  loading = false;
  productId!: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) this.fillProductForm(+this.productId);

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

    this.productId ? this.updateProduct(+this.productId) : this.addProduct();

  }

  addProduct() {
    this.productService
      .addProduct(this.productForm.value)
      .pipe(first())
      .subscribe({
        next: () => this.router.navigate(['../'], { relativeTo: this.route }),
        complete: () => this.loading = false
      })
  }

  updateProduct(id: number) {
    console.log(id)
  }

  fillProductForm(id: number) {
    this.productService
      .getProduct(id)
      .pipe(first())
      .subscribe((res) => {
        res.purchaseDate = formatDate(res.purchaseDate, 'yyyy-MM-dd', 'en')
        res.warrantyExpiryDate = formatDate(res.warrantyExpiryDate, 'yyyy-MM-dd', 'en')

        this.productForm.patchValue(res)
      })
  }

}
