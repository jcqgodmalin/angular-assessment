import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/contact';
import { ContactServiceService } from 'src/app/contact-service.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  contact!: Contact;

  constructor(private contactService: ContactServiceService, private routing: ActivatedRoute) { }

  ngOnInit(): void {
    this.contactService.getContact(this.routing.snapshot.params['id']).subscribe(data => {
      this.contact = data;
    })
  }

}
