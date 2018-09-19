import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { VineListComponent } from './vine-list/vine-list.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { VineItemComponent } from './vine-item/vine-item.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

import {DataService} from './data.service';
import {ShopCartService} from './shop-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    VineListComponent,
    SearchResultComponent,
    VineItemComponent,
    ShopCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, ShopCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
