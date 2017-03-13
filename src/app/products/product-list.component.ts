import { error } from 'util';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    //selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    image = true;
    listFilter: string;
    imageWidth = 50;
    imageMargin = 2;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {
    }

    showImg() {
        this.image = !this.image;
    }

    ngOnInit() {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
    };

    onNotify($event){
        console.log($event);
    }
}
