import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {
  // Should be from service
  contacts = [
    {
      fullname:'Jasper Rebong', 
      designation:'Mr.', 
      email:'jrebong0@gmail.com',
      groupemail: 'lvcc.com',
      dob: '01/01/1990',
      contactno: ['09478907923', '0948123456'],
      primary:true,
      status:'new',
    }
] ;
}
