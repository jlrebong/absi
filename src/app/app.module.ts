import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdjusterComponent } from './adjuster/adjuster.component';
import { InformationComponent } from './core/forms/information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationComponent } from './core/forms/location/location.component';
import { PhoneFormComponent } from './core/forms/phone-form/phone-form.component';
import { PhoneTableComponent } from './core/forms/phone-table/phone-table.component';
import { ContactsTableComponent } from './core/forms/contacts-table/contacts-table.component';
import { SummaryComponent } from './core/forms/summary/summary.component';
import { ContactDetailsComponent } from './core/forms/contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdjusterComponent,
    InformationComponent,
    LocationComponent,
    PhoneFormComponent,
    PhoneTableComponent,
    ContactsTableComponent,
    SummaryComponent,
    ContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
