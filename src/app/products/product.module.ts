import { SharedModule } from '../shared/shared.module';
import { ProductService } from './product.service';
import { ProductDetailGuard } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,

    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
            canActivate: [ ProductDetailGuard],
            component: ProductDetailComponent },
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {}