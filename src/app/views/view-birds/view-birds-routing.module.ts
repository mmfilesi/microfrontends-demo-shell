import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBirdsComponent } from './view-birds.component';

const routes: Routes = [
  {
    path: '',
    component: ViewBirdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewBirdsRoutingModule {}
