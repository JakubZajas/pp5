import { Invoice } from "./invoice";

export class Customer {
    constructor(){}

    name: string = "";
    nip: string = "";
    city: string = "";
    street: string = "";
    houseNumber: string = "";
    zipCode: string = "";
    comments: string = "";
    industry: string = "";
    active: boolean = true

    getAddress():string {
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    }
    getCustomerInfo():string {
        return `${this.name} (${this.nip})`;
    }
}


export class Supplier extends Customer{
    constructor(accountNumber: any){
        super();
        accountNumber = accountNumber;
    }
    accountNumber:string  = "";
    invoices:Invoice[] = [];
}

// class Supplier extends Customer {
//     accountNumber: string;
//     invoices: string[] = [];

//     constructor(accountNumber: string){
//         super()
//         this.accountNumber= accountNumber
//     }
// }