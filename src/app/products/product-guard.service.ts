import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate{
    constructor(private _router: Router) {
    };
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = +route.url[1].path; // /product/ID (product is route.url[0], ID is [1])
        if (isNaN(id) || id < 1) {
            // error: redirect to product list
            alert('Invalid product ID'); // should redirect to error page
            this._router.navigate(['/products']);
            // abort current navigation
            return false;
        };
        return true;
    }
}
