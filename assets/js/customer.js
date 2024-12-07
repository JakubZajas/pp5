"use strict";
class Customer {
    constructor() {
        this.company = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNr = "";
        this.mieszkanie = "";
        this.kodPocztowy = "";
        this.uwagi = "";
        this.Branża = "";
        this.check = false;
    }
    getData() {
        return `${this.company} Nip:(${this.nip})`;
    }
    getAddress() {
        return `House: ${this.houseNr} Mieszkanie: ${this.mieszkanie} Kod: ${this.kodPocztowy}`;
    }
}
class Supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.invoices = [];
        this.accountNumber = accountNumber;
    }
}
