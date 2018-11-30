import { Component, OnInit } from '@angular/core';
import { contacts } from './contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  readonly contactsData = contacts;

  constructor() { }

  ngOnInit() {
  }

}
