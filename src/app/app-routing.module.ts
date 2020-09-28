import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StudentLifeModule } from './student-life/student-life.module;


const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch: 'full'
  },  
  {
    path:'home', component: HomeComponent
  },
  {
    path:'payment', 
    data: { preload: true },
    loadChildren:() =>
    import('./admission/admission.module')
       .then(m => m.AdmissionModule)
  },
  {
    path:'student', 
    data: { preload: true },
    loadChildren:() =>
    import('./student-life/student-life.module')
       .then(m => m.StudentLifeModule)
  },
  {
    path:'**',component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
