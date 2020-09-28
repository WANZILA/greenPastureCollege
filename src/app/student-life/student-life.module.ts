import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentLifeRoutingModule } from './student-life-routing.module';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { LibraryComponent } from './library/library.component';


@NgModule({
  declarations: [
    AccommodationComponent, 
    LibraryComponent
  ],
  imports: [
    CommonModule,
    StudentLifeRoutingModule
  ]
})
export class StudentLifeModule { }
