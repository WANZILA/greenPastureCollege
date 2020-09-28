import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path:'accommodation', component:AccommodationComponent
  },
  {
    path:'library', component: LibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentLifeRoutingModule { }
