import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

/* Para la carga lazy de componentes */
import { LazyElementsModule } from '@angular-extensions/elements';

import { ViewMonkeysRoutingModule } from './view-monkeys-routing.module';
import { ViewMonkeysComponent } from './view-monkeys.component';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ViewMonkeysComponent],
  imports: [CommonModule, ViewMonkeysRoutingModule, LazyElementsModule, ComponentsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewMonkeysModule {}
