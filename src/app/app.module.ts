import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { VineListComponent } from './vine-list/vine-list.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { VineItemComponent } from './vine-item/vine-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    VineListComponent,
    SearchResultComponent,
    VineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
