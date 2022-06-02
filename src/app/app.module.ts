import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { AddressComponent } from './components/address/address.component';
import { PersonalComponent } from './components/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    PersonalComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
