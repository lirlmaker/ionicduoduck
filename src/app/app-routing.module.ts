import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', redirectTo: 'login',pathMatch: 'full'  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module').then( m => m.ClasesPageModule)
  },
  /*{
    path: 'codigoqr',
    loadChildren: () => import('./codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
