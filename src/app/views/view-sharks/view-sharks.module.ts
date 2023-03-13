import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

/* Para la carga lazy de componentes */
import { LazyElementsModule } from '@angular-extensions/elements';

import { ViewSharksRoutingModule } from './view-sharks-routing.module';
import { ViewSharksComponent } from './view-sharks.component';

@NgModule({
  declarations: [ViewSharksComponent],
  imports: [CommonModule, ViewSharksRoutingModule, LazyElementsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewSharksModule {}
