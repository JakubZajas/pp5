export class Customer {
    constructor() {
    }
    company : String = "";
    nip : String = "";
    city : String = "";
    street : String = "";
    houseNr : String = "";
    mieszkanie : String = "";
    kodPocztowy : String = "";
    uwagi : String = "";
    Branża : String = "";
    check : Boolean = false;
    did?: number;

    getData() {
        return `${this.company} Nip:(${this.nip})` ;
    }
    getAddress() {
        return `House: ${this.houseNr} Mieszkanie: ${this.mieszkanie} Kod: ${this.kodPocztowy}` ;
    }
}


class Supplier extends Customer {
    accountNumber: string;
    invoices: string[] = [];

    constructor(accountNumber: string) {
        super();
        this.accountNumber = accountNumber;
    }
}

