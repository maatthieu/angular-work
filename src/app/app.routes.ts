import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';
import { ProductNew } from './pages/product-new/product-new';

export const routes: Routes = [
    {path: 'products', component: ProductList},
    {path: 'products/new', component: ProductNew},
    {path: 'products/:id', component: ProductDetails},
    {path: '**', redirectTo: 'products'}
];
