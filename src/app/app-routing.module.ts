import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {VineItemComponent} from './vine-item/vine-item.component';
import {VineListComponent} from './vine-list/vine-list.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {HomeComponent} from './home/home.component';
import {ShopCartComponent} from './shop-cart/shop-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  { path: 'vine-list', component: VineListComponent },
  { path: 'vine/:id', component: VineItemComponent },
  { path: 'search/:type/:searchString', component: SearchResultComponent },
  { path: 'shop-cart', component: ShopCartComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
