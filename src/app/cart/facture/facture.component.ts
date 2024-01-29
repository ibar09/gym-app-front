import { Component, Input } from '@angular/core';
import { Product } from 'src/app/marketplace/types/product.interface';

@Component({
  selector: 'facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  @Input() items:any[]=[];

  // Function to calculate total number of items
  getTotalItems(): number {
    return this.items.length;
  }

  // Function to calculate total amount
  getTotalAmount(): number {
    return this.items.reduce((total, item) => total + item.price*item.amount, 0);
  }
}
