import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyAgentPageRoutingModule } from './policy-agent-routing.module';

import { PolicyAgentPage } from './policy-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyAgentPageRoutingModule
  ],
  declarations: [PolicyAgentPage]
})
export class PolicyAgentPageModule {}
