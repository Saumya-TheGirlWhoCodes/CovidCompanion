import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { TableRepresentationComponent } from './common/table-representation/table-representation.component';
import {MatTableModule} from '@angular/material/table';
import { DyanamicModalsComponent } from './common/dyanamic-modals/dyanamic-modals.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BootstrapperComponent } from './bootstrapper/bootstrapper.component';
import { LocationsComponent } from './patient/locations/locations.component';
import { FallbackComponent } from './fallback/fallback.component';
import { HeaderComponent } from './common/header/header.component';
import { DoctorRegistrationDialogComponent } from './doctor/doctor-registration-dialog/doctor-registration-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    NavigationComponent,
    TableRepresentationComponent,
    DyanamicModalsComponent,
    PatientDashboardComponent,
    BootstrapperComponent,
    LocationsComponent,
    FallbackComponent,
    HeaderComponent,
    DoctorRegistrationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents:[AppComponent,
    DoctorRegistrationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
