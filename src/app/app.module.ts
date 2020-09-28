import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutModule } from './about/about.module';
// import { AdmissionModule} from './admission.module';
import { FooterComponent } from './footer/footer.component';
import { AdmissionModule } from './admission/admission.module';
import { StudentLifeModule } from './student-life/student-life.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    AdmissionModule,
    StudentLifeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
