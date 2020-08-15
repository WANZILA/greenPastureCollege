import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeesTuitionPaymentsComponent } from './fees-tuition-payments/fees-tuition-payments.component';

const routes: Routes = [
  {
    path: '',
    component: FeesTuitionPaymentsComponent
  },
  // {
  //   path: ':feesStructureEA',
  //   component:
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
