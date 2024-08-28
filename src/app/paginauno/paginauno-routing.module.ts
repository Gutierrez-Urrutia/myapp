import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaunoPage } from './paginauno.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaunoPageRoutingModule {}
