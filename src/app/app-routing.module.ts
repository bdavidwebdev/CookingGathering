import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';


const routes: Routes = [
  {path: '', redirectTo: '/composants', pathMatch: 'full'},
  {path: 'composants', component: ListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
