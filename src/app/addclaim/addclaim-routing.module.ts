import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddclaimPage } from './addclaim.page';

const routes: Routes = [
  {
    path: '',
    component: AddclaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddclaimPageRoutingModule {}
