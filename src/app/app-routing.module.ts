import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';

const routes: Routes = [
  { path: '', redirectTo: '/perdiem', pathMatch: 'full' },
  { path: 'perdiem', component: LodgingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
