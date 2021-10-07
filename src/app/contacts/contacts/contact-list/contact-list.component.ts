import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactServiceService } from 'src/app/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts?: Contact[];

  constructor(private contactService : ContactServiceService) { }

  ngOnInit(): void {

    this.contactService.addContactFinished.subscribe(data => {
      if(data === true){
        console.log("done adding.. refreshing list..");
        this.getContacts();
      }
    })
    this.contactService.deleteContactFinished.subscribe(data => {
      if(data === true){
        console.log("done deleting.. refreshing list..");
        this.getContacts();
      }
    })
    this.contactService.updateContactFinished.subscribe(data => {
      if(data === true){
        console.log("done updating.. refreshing list..");
        this.getContacts();
      }
    })

    this.getContacts();

  }

  getContacts(){
    this.contactService.getAllContacts().subscribe(data=>{
      this.contacts = data;
    })
  }


  deleteContact(id: number){
    this.contactService.deleteContact(id);
  }

  updateContact(contact: Contact){
    this.contactService.contactForUpdate.emit(contact);
  }

}
