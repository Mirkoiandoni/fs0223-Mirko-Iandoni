import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule) }, { path: 'login', loadChildren: () => import('./page/auth/login/login.module').then(m => m.LoginModule) }, { path: 'registra', loadChildren: () => import('./page/auth/registra/registra.module').then(m => m.RegistraModule) }, { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
