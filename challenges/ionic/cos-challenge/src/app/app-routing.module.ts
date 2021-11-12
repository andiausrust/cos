import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './libs/+store/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'buyer-auction-list',
    loadChildren: () => import('./pages/buyer-auction-list/buyer-auction-list.module')
      .then(m => m.BuyerAuctionListPageModule),
    canLoad: [ AuthGuard ]
  },
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
})
export class AppRoutingModule {}
