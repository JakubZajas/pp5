import { Unit } from "../enums/unit";
import { Tax } from "../enums/tax";


export class Invoice{
    name: string = "";
    quantity: number = 0;
    unit?: Unit;
    tax?: Tax;
    netto?: number;
    brutto?: number;
}