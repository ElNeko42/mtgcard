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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CardExpositorComponent,
    CardDetailComponent,
    CardSearchComponent,
    RegisterComponent,
    LoginComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,   
     CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
