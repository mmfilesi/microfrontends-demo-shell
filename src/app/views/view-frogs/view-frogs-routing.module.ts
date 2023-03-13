import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFrogsComponent } from './view-frogs.component';

const routes: Routes = [
  {
    path: '',
    component: ViewFrogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewFrogsRoutingModule {}
