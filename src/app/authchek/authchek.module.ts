import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthchekPageRoutingModule } from './authchek-routing.module';

import { AuthchekPage } from './authchek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthchekPageRoutingModule
  ],
  declarations: [AuthchekPage]
})
export class AuthchekPageModule {}
