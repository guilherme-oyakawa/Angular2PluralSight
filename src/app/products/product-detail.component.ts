import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    pageTitle = 'Product Details';
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        const id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void{
        this._router.navigate(['/products']);
    }
}
