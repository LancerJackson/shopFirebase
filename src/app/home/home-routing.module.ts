import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

// Envia os usuarios não autorizados ou não logados, para a página
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);

// Automaticamente redireciona os usuarios logados para a tela inicial.
const redirectLoggedInToProducts = () => redirectLoggedInTo(['/produtos']);

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'produtos',
        children: [
          {
            path: '',
            ...canActivate(redirectUnauthorizedToLogin),
            loadChildren: () => import('../pages/produtos/produtos.module').then( m => m.ProdutosPageModule)
          },
        ]
      },
      {
        path: 'sobre',
        children: [
          {
            path: '',
            ...canActivate(redirectUnauthorizedToLogin),
            loadChildren: () => import('../pages/sobre/sobre.module').then( m => m.SobrePageModule)
          },
        ]
      },
      {
        path: 'historia',
        children: [
          {
            path: '',
            ...canActivate(redirectUnauthorizedToLogin),
            loadChildren: () => import('../pages/historia/historia.module').then( m => m.HistoriaPageModule)
          },
        ]
      },
      {
        path: 'cupons',
        children: [
          {
            path: '',
            ...canActivate(redirectUnauthorizedToLogin),
            loadChildren: () => import('../pages/cupons/cupons.module').then( m => m.CuponsPageModule)
          },
        ]
      },
      { path: '', redirectTo: '/home/produtos', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/home/produtos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
