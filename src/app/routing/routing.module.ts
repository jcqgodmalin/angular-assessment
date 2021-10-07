import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ContactViewComponent } from '../contacts/contacts/contact-view/contact-view.component';
import { ContactsComponent } from '../contacts/contacts/contacts.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes : Routes = [
  {path : '', component: ContactsComponent, pathMatch: 'full'},
  {path : 'contact/:id', component: ContactViewComponent},
  {path : 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
