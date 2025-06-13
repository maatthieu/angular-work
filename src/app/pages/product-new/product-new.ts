import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductApi } from '../../services/product-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './product-new.html',
  styleUrl: './product-new.css'
})
export class ProductNew {

  private readonly productApi = inject(ProductApi);
  private readonly router = inject(Router);

  readonly productForm = new FormGroup({
    name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    price: new FormControl(0, {nonNullable: true, validators: [Validators.min(0)]}),
    description: new FormControl('', {nonNullable: true})
  });

  onSubmit() {
    console.log(this.productForm.value);

    this.productApi.save(this.productForm.value).subscribe(_ => this.router.navigateByUrl("/products"));
  }

  get nameControl() {
    return this.productForm.get('name');
  }

  get priceControl() {
    return this.productForm.get('price');
  }
}
