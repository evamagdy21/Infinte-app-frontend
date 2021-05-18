import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },

  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'offers', loadChildren: () => import('./components/store/offer/offer.module').then(m => m.OfferModule) },
  { path: 'search', loadChildren: () => import('./components/store/search/search.module').then(m => m.SearchModule) },
  { path: 'request-card', loadChildren: () => import('./components/client/card/request-card/request-card.module').then(m => m.RequestCardModule) },
  { path: 'login', loadChildren: () => import('./components/client/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
