import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyAgentPage } from './policy-agent.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyAgentPageRoutingModule {}
