import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Phone } from '../../models/phone-model';

@Component({
  selector: 'app-phone-table',
  templateUrl: './phone-table.component.html',
  styleUrls: ['./phone-table.component.css']
})
export class PhoneTableComponent implements OnInit {
  form = this.fb.group({
    phones: this.fb.array([])
  });

  typeList = [
    {id: "1", title:'Mobile' },
    {id: "2", title:'Home' },
    {id: "3", title:'Work' },
    {id: "4", title:'Main' },
    {id: "5", title:'Work Fax' },
    {id: "6", title:'Home Fax' },
    {id: "7", title:'Pager' },
    {id: "8", title:'Other' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  get phones() {
    return this.form.controls["phones"] as FormArray;
  }

  addPhone() {
    const PhoneForm = this.fb.group<Phone>({
      type: "",
      number: null,
      status: "NEW" 
    });
    this.phones.push(PhoneForm);
  }

  getStatus(idx) {
    return this.phones.at(idx).value.status;
  }

  deletePhone(idx: number) {
    this.phones.removeAt(idx);
  }
}
