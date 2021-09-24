import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposantsEditComponent } from './admin/composants-edit/composants-edit.component';
import { ComposantsNewComponent } from './admin/composants-new/composants-new.component';
import { ComposantsComponent } from './admin/composants/composants.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';


const routes: Routes = [
  {path: '', redirectTo: '/composants', pathMatch: 'full'},
  {path: 'home', redirectTo: '/composants', pathMatch: 'full'},
  {path: 'composants', component: ListingComponent},
  /*{path: 'admin/comp', component: ComposantsComponent},
  {path: 'admin/comp/new', component: ComposantsNewComponent},
  {path: 'admin/comp/edit/:id', component: ComposantsEditComponent},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
