import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AdmissionRoutingModule } from './admission-routing.module';
import { FeesTuitionPaymentsComponent } from './fees-tuition-payments/fees-tuition-payments.component';
import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionRequirementsComponent } from './admission-requirements/admission-requirements.component';
import { ApplicationGuidelinesComponent } from './application-guidelines/application-guidelines.component';


@NgModule({
  declarations: [
    FeesTuitionPaymentsComponent, 
    AdmissionRequirementsComponent, ApplicationGuidelinesComponent],
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ]
})
export class AdmissionModule { }
