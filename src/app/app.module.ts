import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KostComponent } from'./kost/kost.component';
import { KostDetailComponent } from './kost/kost-detail/kost-detail.component';
import { KostListComponent } from './kost/kost-list/kost-list.component';
import { KostItemComponent } from './kost/kost-list/kost-item/kost-item.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KostComponent,
    KostListComponent,
    KostDetailComponent,
    KostItemComponent,
    FooterComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
