import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/view-home/view-home.module').then((m) => m.ViewHomeModule)
  },
  {
    path: 'monkeys',
    loadChildren: () =>
      import('./views/view-monkeys/view-monkeys.module').then((m) => m.ViewMonkeysModule)
  },
  {
    path: 'frogs',
    loadChildren: () =>
      import('./views/view-frogs/view-frogs.module').then((m) => m.ViewFrogsModule)
  },
  {
    path: 'birds',
    loadChildren: () =>
      import('./views/view-birds/view-birds.module').then((m) => m.ViewBirdsModule)
  },
  {
    path: 'sharks',
    loadChildren: () =>
      import('./views/view-sharks/view-sharks.module').then((m) => m.ViewSharksModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
