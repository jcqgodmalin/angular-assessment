import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  addContactFinished = new EventEmitter<boolean>();
  deleteContactFinished = new EventEmitter<boolean>();
  updateContactFinished = new EventEmitter<boolean>();
  contactForUpdate = new EventEmitter<Contact>();

  constructor(private beService: BackendService) { }


  public getAllContacts() : Observable<Contact[]> {
    return this.beService.getAllContacts();
  }

  public getContact(id: number) : Observable<Contact> {
    return this.beService.getContact(id);
  }

  public addContact(contact : Contact) : void {
    this.beService.addContact(contact).subscribe(data=>{
      this.addContactFinished.emit(true);
    })
  }

  public updateContact(id: number, contact: Contact) : void {
    this.beService.updateContact(id, contact).subscribe(data=>{
      this.updateContactFinished.emit(true);
    })
  }


  public deleteContact(id: number) : void {
    this.beService.deleteContact(id).subscribe(data=>{
      this.deleteContactFinished.emit(true);
    })
  }


}
