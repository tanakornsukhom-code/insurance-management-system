import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpolicyAgentPage } from './addpolicy-agent.page';

const routes: Routes = [
  {
    path: '',
    component: AddpolicyAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpolicyAgentPageRoutingModule {}
