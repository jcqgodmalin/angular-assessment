import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/contact';
import { ContactServiceService } from 'src/app/contact-service.service';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
  providers: [ContactListComponent]
})
export class ContactAddComponent implements OnInit {

  forUpdate = false;
  contactIdForUpdate!: number;

  addForm!: FormGroup;

  errorMessage!: string;

  constructor(private contactService : ContactServiceService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.contactService.contactForUpdate.subscribe(data=>{
      this.contactIdForUpdate = data.id;
      this.resetForm();
      this.forUpdate = true;
      this.addForm.controls['name'].setValue(data.name);
      this.addForm.controls['email'].setValue(data.email);
      this.addForm.controls['contact'].setValue(data.contact);
    })
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required]
    })
  }

  resetForm(){
    this.addForm.controls['name'].setValue('');
    this.addForm.controls['email'].setValue('');
    this.addForm.controls['contact'].setValue('');
    this.forUpdate = false;
    this.errorMessage = '';
  }

  isValid() : boolean{
    if(this.addForm.valid){
      this.errorMessage = '';
      const contactEmail = this.addForm.controls.email.value;
      const domain = contactEmail.split("@")[1];
      if(domain.includes(".")){
        return true;
      }else{
        this.errorMessage = "Email is invalid";
        return false;
      }
    }else{
      this.errorMessage = "All fields are required";
      return false;
    }
  }

  addContact(){

    if(this.isValid()){
      this.contactService.addContact(this.addForm.value);
      this.resetForm();
    }

  }

  updateContact(){
    if(this.isValid()){
      this.contactService.updateContact(this.contactIdForUpdate,this.addForm.value);
      this.resetForm();
    }
    
  }

}
