import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  backend_url : string = 'http://localhost:8080/api';


  public getAllContacts() : Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.backend_url}/users`);
  }

  public getContact(id: number) : Observable<Contact> {
    return this.http.get<Contact>(`${this.backend_url}/users/${id}`);
  }

  public addContact(contact: Contact) : Observable<void>{
    return this.http.post<void>(`${this.backend_url}/add`,contact);
  }

  public updateContact(id: number, contact: Contact) : Observable<void> {
    return this.http.put<void>(`${this.backend_url}/update/${id}`,contact);
  }

  public deleteContact(id: number) : Observable<void> {
    return this.http.delete<void>(`${this.backend_url}/delete/${id}`);
  }

}
