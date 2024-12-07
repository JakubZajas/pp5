import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';
import { CustomersRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent,
    CustomerListElementComponent
  ],
  exports:[
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,

  ]
})
export class InvoiceModule { }