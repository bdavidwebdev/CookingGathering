import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { ComposantsComponent } from './admin/composants/composants.component';
import { ComposantsNewComponent } from './admin/composants-new/composants-new.component';
import { ComposantsEditComponent } from './admin/composants-edit/composants-edit.component';
import { HomeComponent } from './home/home.component';
import { HeadbarComponent } from './navbar/headbar/headbar.component';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0sS0PLJZ3uwBugTPJJjjyghjaQShKBgM",
  authDomain: "nazarick-cooking.firebaseapp.com",
  projectId: "nazarick-cooking",
  storageBucket: "nazarick-cooking.appspot.com",
  messagingSenderId: "984396036683",
  appId: "1:984396036683:web:18ad646cbf4bc35b6c2bce"
};

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ComposantsComponent,
    ComposantsNewComponent,
    ComposantsEditComponent,
    HomeComponent,
    HeadbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
