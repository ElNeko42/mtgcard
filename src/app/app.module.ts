import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardExpositorComponent } from './card-expositor/card-expositor.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardSearchComponent } from './card-search/card-search.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    CardExpositorComponent,
    CardDetailComponent,
    CardSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
