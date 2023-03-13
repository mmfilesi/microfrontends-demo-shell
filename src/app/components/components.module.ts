import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

import { StockComponent } from './stock/stock.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StockComponent, CardComponent],
  exports: [StockComponent, CardComponent]
})
export class ComponentsModule {}
