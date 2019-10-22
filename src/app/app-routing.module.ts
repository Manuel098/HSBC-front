import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditFormComponent } from './quotation/credit-form/credit-form.component';
import { PersonalFormComponent } from './data/personal-form/personal-form.component';

const routes: Routes = [
  { path: 'creditQuotation', component:CreditFormComponent },
  { path: 'test', component:PersonalFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
