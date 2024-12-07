import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../Services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {  

  customersList: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customersList = this.customerService.getCustomers();
    console.log(this.customersList)
  }

  // PO CO TO?
  redirect() {
    console.log("dfasdfasdfa")
    this.router.navigate(['/invoice/customer-form']);
  }
}
