import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent{
    pageTitle = 'Product Details';
    product: IProduct;
}
