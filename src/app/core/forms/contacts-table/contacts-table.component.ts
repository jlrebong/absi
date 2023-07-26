import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddcontactComponent } from '../../dialog/addcontact/addcontact.component';
import { Contact } from '../../models/contact-phone';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnInit  {
  @Input()
  contactsList;

  contacts: Contact[];

  @Output()
  data = new EventEmitter();
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.contacts= this.contactsList;
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80vw";

    const dialogRef = this.dialog.open(AddcontactComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      this.contacts.push(data);
      this.data.emit(this.contacts);
    }); 
  }

  editDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {}
    const dialogRef = this.dialog.open(AddcontactComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    ); 
  }
}
