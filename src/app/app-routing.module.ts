import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

// Envia os usuarios não autorizados ou não logados, para a página
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);

// Automaticamente redireciona os usuarios logados para a tela inicial.
const redirectLoggedInToProducts = () => redirectLoggedInTo(['/home/produtos']);

const routes: Routes = [
  {
    path: 'home',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { 
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToProducts),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
