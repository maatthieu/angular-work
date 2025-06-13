import { Component, inject } from '@angular/core';
import { ProductApi } from '../../services/product-api';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ AsyncPipe, RouterLink ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  private readonly productApi = inject(ProductApi);

  products$: Observable<Product[]>;
  message = '';

  constructor() {
    this.products$ = this.productApi.findAll();
  }

  onDelete(id: number) {
    this.message = `deleting product ${id}`;

    // Subscribe necessaire pour que l'action soit faite
    this.productApi.deleteById(id).subscribe({
      next:() => {
        // Rafraichissement de la liste des produits
        this.products$ = this.productApi.findAll();
        this.message = `product ${id} deleted`;
      },
      error:() => {
        this.message = `error while deleting product ${id}`;
      }
    });
  }
}
