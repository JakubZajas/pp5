import { Routes } from '@angular/router';
import { ProductFormComponentComponent } from './product-module/product-form-component/product-form-component.component';

export const routes: Routes = [
    {path: 'invoice', loadChildren: ()=> import ('./invoice/invoice.module').then(m => m.InvoiceModule)},
    {path: 'product-form', component: ProductFormComponentComponent},
];
