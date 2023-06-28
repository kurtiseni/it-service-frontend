import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-edit.component.html',
})
export class AddEditServiceComponent implements OnInit {
  submitted = false;
  addServiceForm = new UntypedFormGroup({
    productKey: new UntypedFormControl('', [Validators.required]),
    expirayDate: new UntypedFormControl('', [Validators.required]),
    serviceCost: new UntypedFormControl('', [Validators.required]),
    repairStatus: new UntypedFormControl(true, [Validators.required]),
    description: new UntypedFormControl('', [Validators.required]),
  });

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {}

  get productKey() {
    return this.addServiceForm.controls['productKey'];
  }
  get expirayDate() {
    return this.addServiceForm.controls['expirayDate'];
  }
  get serviceCost() {
    return this.addServiceForm.controls['serviceCost'];
  }
  get repairStatus() {
    return this.addServiceForm.controls['repairStatus'];
  }
  get description() {
    return this.addServiceForm.controls['description'];
  }

  submit() {
    this.submitted = true;
    if (this.addServiceForm.invalid) return;

    console.log(this.addServiceForm.value);
    this.productService
      .addService(this.addServiceForm.value)
      .subscribe((res) => console.log(res));
  }
}
