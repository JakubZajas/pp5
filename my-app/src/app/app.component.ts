import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceModule } from '../invoice/invoice.module';
import { ProductModuleModule } from '../product-module/product-module.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceModule, ProductModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kuba Z';
}
