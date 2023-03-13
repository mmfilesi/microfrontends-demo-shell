import { NgModule } from '@angular/core';
import { ViewHomeComponent } from './view-home.component';
import { ViewHomeRoutingModule } from './view-home-routing.module';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ViewHomeComponent],
  imports: [CommonModule, ViewHomeRoutingModule, ComponentsModule],
  providers: []
})
export class ViewHomeModule {}
