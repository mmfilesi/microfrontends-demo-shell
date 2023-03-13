import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { LazyElementsModule } from '@angular-extensions/elements';

import { ComponentsModule } from 'src/app/components/components.module';

import { ViewFrogsRoutingModule } from './view-frogs-routing.module';
import { ViewFrogsComponent } from './view-frogs.component';

@NgModule({
  declarations: [ViewFrogsComponent],
  imports: [CommonModule, ViewFrogsRoutingModule, LazyElementsModule, ComponentsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewFrogsModule {}
