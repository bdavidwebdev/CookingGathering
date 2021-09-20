import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';

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
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
