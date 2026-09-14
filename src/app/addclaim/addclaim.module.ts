import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddclaimPageRoutingModule } from './addclaim-routing.module';

import { AddclaimPage } from './addclaim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddclaimPageRoutingModule
  ],
  declarations: [AddclaimPage]
})
export class AddclaimPageModule {}
