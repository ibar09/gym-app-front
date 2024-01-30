import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/marketplace/types/product.interface';

@Component({
  selector: 'facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  @Input() items:any[]=[];
  @Output() totalAmountChange: EventEmitter<number> = new EventEmitter<number>();

  // Function to calculate total number of items
  getTotalItems(): number {
    return this.items.length;
  }

  // Function to calculate total amount
  getTotalAmount(): number {
    const totalAmount = this.items.reduce((total, item) => total + item.price * item.amount, 0);
    
    // Emit the total amount to the parent component
    this.totalAmountChange.emit(totalAmount);

    return totalAmount;
  }
}

