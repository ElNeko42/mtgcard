import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardExpositorComponent } from './card-expositor/card-expositor.component';

const routes: Routes = [
  { path: '', component: CardExpositorComponent },
  { path: 'card/:id', component: CardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
