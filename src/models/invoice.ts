class Invoice{
    name: string = "";
    quantity: number = 0;
    unit?: Unit;
    tax?: Tax;
    netto?: number;
    brutto?: number;
}