import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthchekPage } from './authchek.page';

const routes: Routes = [
  {
    path: '',
    component: AuthchekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthchekPageRoutingModule {}
