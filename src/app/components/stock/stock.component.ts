import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { StockService } from 'src/app/core/global-services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stock: any;
  stock$: Subscription = new Subscription();

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stock$ = this.stockService.getStock().subscribe((stock) => (this.stock = stock));
  }

  ngOnDestroy() {
    this.stock$.unsubscribe();
  }
}
