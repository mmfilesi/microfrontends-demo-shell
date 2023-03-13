import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMonkeysComponent } from './view-monkeys.component';

const routes: Routes = [
  {
    path: '',
    component: ViewMonkeysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewMonkeysRoutingModule {}
