import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authchek',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'despensa',
    loadChildren: () => import('./despensa/despensa.module').then( m => m.DespensaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar-articulo/editar-articulo.module').then( m => m.EditarArticuloPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'authchek',
    loadChildren: () => import('./authchek/authchek.module').then( m => m.AuthchekPageModule),
    canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
