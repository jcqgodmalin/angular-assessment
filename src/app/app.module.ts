import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { ContactAddComponent } from './contacts/contacts/contact-add/contact-add.component';
import { ContactListComponent } from './contacts/contacts/contact-list/contact-list.component';
import { ContactViewComponent } from './contacts/contacts/contact-view/contact-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactAddComponent,
    ContactListComponent,
    ContactViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
