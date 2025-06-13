import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApi } from '../../services/product-api';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [ AsyncPipe ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productApi = inject(ProductApi);

  id: number;
  product$: Observable<Product>;

  constructor() {
    // retrieve the product id
    this.id = Number(this.activatedRoute.snapshot.params['id']);

    // retrieve the product object from backend
    this.product$ = this.productApi.findById(this.id);
  }
}
