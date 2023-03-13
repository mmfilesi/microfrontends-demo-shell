import { Component } from '@angular/core';
import { StockService } from 'src/app/core/global-services/stock.service';

/** Componente para mostrar cómo funciona la comunicación entre microfrontends */

@Component({
  selector: 'app-view-frogs',
  templateUrl: './view-frogs.component.html',
  styleUrls: ['./view-frogs.scss']
})
export class ViewFrogsComponent {
  /* Url donde se encuentra el js del compo */
  elementUrl = './assets/apps/frogs/main.js';

  /* Los microfrontends nunca deben comunicarse directamente.
  Siempre deben pasar por el shell orquestador.
  En este ejemplo, un BehaviorSubject */
  constructor(private stockService: StockService) {}

  eat(foodType: any) {
    this.stockService.removeFromStock(foodType.detail);
  }
}
