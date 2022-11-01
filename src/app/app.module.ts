import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AnnuiteComponent } from './annuite/annuite.component';
import { CapitalComponent } from './capital/capital.component';
import { DureeComponent } from './duree/duree.component';
import { CreditComponent } from './credit/credit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnnuiteComponent,
    CapitalComponent,
    DureeComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
