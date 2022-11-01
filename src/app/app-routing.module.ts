import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnuiteComponent } from './annuite/annuite.component';
import { CapitalComponent } from './capital/capital.component';
import { CreditComponent } from './credit/credit.component';
import { DureeComponent } from './duree/duree.component';

const routes: Routes = [
  {path : "annuitée" , component:AnnuiteComponent},
  {path : "credit" , component:CreditComponent},
  {path : "durée" , component:DureeComponent},
  {path : "capital" , component:CapitalComponent},
  { path: '',   redirectTo: '/annuitée', pathMatch: 'full' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
