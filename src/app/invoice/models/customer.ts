import { Invoice } from "./invoice";

export class Customer {
    constructor(){}

    id: string = "";
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
        // console.log("NIP:", this.nip)
        return `${this.name} (${this.nip})`;
    }

    deseralize(input : Object) : Customer {
        Object.assign(this, input);
        return this;
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