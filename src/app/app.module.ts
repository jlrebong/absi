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
import { AddcontactComponent } from './core/dialog/addcontact/addcontact.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { BranchSectionComponent } from './branch-section/branch-section.component';
import { DivisionGroupComponent } from './division-group/division-group.component';
import { MortgageeComponent } from './mortgagee/mortgagee.component';
import { MotorShopComponent } from './motor-shop/motor-shop.component';
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
    AddcontactComponent,
    BankAccountComponent,
    BranchSectionComponent,
    DivisionGroupComponent,
    MortgageeComponent,
    MotorShopComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
