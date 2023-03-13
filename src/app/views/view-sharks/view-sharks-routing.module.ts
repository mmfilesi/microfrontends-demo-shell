import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSharksComponent } from './view-sharks.component';

const routes: Routes = [
  {
    path: '',
    component: ViewSharksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSharksRoutingModule {}
