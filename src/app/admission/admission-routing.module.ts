import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeesTuitionPaymentsComponent } from './fees-tuition-payments/fees-tuition-payments.component';
// import { AdmissionRequirementsComponent} from './admission-requirements.component';
import { AdmissionRequirementsComponent } from './admission-requirements/admission-requirements.component';
import { ApplicationGuidelinesComponent } from './application-guidelines/application-guidelines.component';

const routes: Routes = [
  {
    path: 'payment',
    component: FeesTuitionPaymentsComponent
  },
  {
    path: 'requirements',
    component: AdmissionRequirementsComponent
  },
  {
    path:'application-guide',
    component: ApplicationGuidelinesComponent
  }
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
