import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardExpositorComponent } from './card-expositor/card-expositor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: CardExpositorComponent },
  { path: 'card/:id', component: CardDetailComponent },
  { path: 'search/:query', component: CardExpositorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
