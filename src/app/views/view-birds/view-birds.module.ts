import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

/* Para la carga lazy de componentes */
import { LazyElementsModule } from '@angular-extensions/elements';

import { ViewBirdsRoutingModule } from './view-birds-routing.module';
import { ViewBirdsComponent } from './view-birds.component';

@NgModule({
  declarations: [ViewBirdsComponent],
  imports: [CommonModule, ViewBirdsRoutingModule, LazyElementsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewBirdsModule {}
