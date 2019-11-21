import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AngularInfoComponent } from './pages/angular-info/angular-info.component';
import { AddressesPage } from './pages/addresses/addresses.page';
import { AddressesComponent } from './components/addresses/addresses.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AngularInfoComponent,
    AddressesComponent,
    AddressesPage
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ MaterialModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
