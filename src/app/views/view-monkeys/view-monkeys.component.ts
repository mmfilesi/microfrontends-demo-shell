import { Component } from '@angular/core';
import { StockService } from 'src/app/core/global-services/stock.service';

/** Componente para mostrar cómo funciona la comunicación entre microfrontends */

@Component({
  selector: 'app-view-monkeys',
  templateUrl: './view-monkeys.component.html',
  styleUrls: ['./view-monkeys.scss']
})
export class ViewMonkeysComponent {
  elementUrl = './assets/apps/monkeys/main.js';
  totalMonkeys = 2;

  constructor(private stockService: StockService) {}

  addMonkey() {
    this.totalMonkeys++;
  }

  removeMonkey() {
    this.totalMonkeys--;
  }

  eat(foodType: any) {
    this.stockService.removeFromStock(foodType.detail);
  }
}
