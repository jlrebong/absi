import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { LABELS } from '../../models/labels';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  labels = LABELS["adjuster"];
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddcontactComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

  }

  ngOnInit(): void {
    console.log(this.labels);
  }

  save() {
    // this.dialogRef.close(this.form.value);
    this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}
