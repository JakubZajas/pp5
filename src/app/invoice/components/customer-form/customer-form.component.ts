import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../Services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  
  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router
    ) {

  }


  onSubmitForm(ngForm : NgForm){
    // console.log(ngForm.valid);
    // console.log(ngForm);

    if(ngForm.valid){
      // console.log('zawartość service', this.customer); 
      let result = this.customerService.addCustomer(this.customer).subscribe((data:Customer) => {
        console.log(data)
        this.router.navigate(['/invoice/customer-list']);
      })
    }
    else{
      console.error("popraw forma");
    }
  }

}


