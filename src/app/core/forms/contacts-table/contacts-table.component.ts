import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddcontactComponent } from '../../dialog/addcontact/addcontact.component';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {
  @Input()
  initialValue;

  @Output()
  data = new EventEmitter();
  
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

  constructor(private dialog: MatDialog) {}

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80vw";

    const dialogRef = this.dialog.open(AddcontactComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    ); 
  }
}
