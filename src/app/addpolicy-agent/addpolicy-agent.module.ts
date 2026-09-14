import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpolicyAgentPageRoutingModule } from './addpolicy-agent-routing.module';

import { AddpolicyAgentPage } from './addpolicy-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpolicyAgentPageRoutingModule
  ],
  declarations: [AddpolicyAgentPage]
})
export class AddpolicyAgentPageModule {}
