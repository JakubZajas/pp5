import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class CustomerService {

  private customersList: Customer[] = [];
  private baseUrl : string = environment.apiUrl + "/customers";

  constructor(
    private httpClient: HttpClient
  ) {}
  
  
  addCustomer(customer: Customer): Observable<Customer> {

    // this.customersList.push(customer);
    // console.log('zawartość Service:', this.customersList);

    return this.httpClient.post<Customer>(this.baseUrl, customer);;
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
    .get<Customer[]>(this.baseUrl)
    .pipe(
      map((customers : Customer[]) =>
        customers.map((customer) => new Customer().deseralize(customer))
      )
    );
  }

  removeCustomer(customer:Customer): Observable<Customer> {
    console.log("rodzic ma usunąc:", customer)

    const headers : HttpHeaders = new HttpHeaders({
      "CorrelationId": "12312"
    }) 
    
    return this.httpClient.delete<Customer>(this.baseUrl + '/' + customer.id, {headers: headers})

    
    // this.customersList = this.customersList.filter(( x: Customer) => {
    //   return x.nip !== customer.nip
    // })
    // return this.customersList;
  }

}
