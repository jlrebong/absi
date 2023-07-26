import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Phone } from '../../models/phone-model';

@Component({
  selector: 'app-phone-table',
  templateUrl: './phone-table.component.html',
  styleUrls: ['./phone-table.component.css']
})
export class PhoneTableComponent implements OnInit {
  @Input()
  initialValue;

  @Output()
  data = new EventEmitter();

  form: FormGroup;

  typeList = [
    {id: "Mobile", title:'Mobile' },
    {id: "Home", title:'Home' },
    {id: "Work", title:'Work' },
    {id: "Main", title:'Main' },
    {id: "Work Fax", title:'Work Fax' },
    {id: "Home Fax", title:'Home Fax' },
    {id: "Pager", title:'Pager' },
    {id: "Other", title:'Other' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    console.log(this.initialValue);

    this.form = this.fb.group({
      phones: this.fb.array([])
    });

    this.initialValue.forEach(e => {
      const PhoneForm = this.fb.group({
        lineNo: e.lineNo,
        type: e.type,
        number: [e.number, Validators.pattern('^[0-9]+$')],
        status: e.status 
      });
      this.phones.push(PhoneForm);
    });

    this.form.valueChanges.subscribe(e => this.data.emit(this.phones));
  }

  get phones() {
    return this.form.controls["phones"] as FormArray;
  }

  addPhone() {
    const PhoneForm = this.fb.group({
      lineNo: null,
      type: "",
      number: [null, Validators.pattern('^[0-9]+$')],
      status: "NEW" 
    });
    this.phones.push(PhoneForm);

    console.log(this.phones);
  }

  getStatus(idx) {
    return this.phones.at(idx).value.status;
  }

  deletePhone(idx: number) {
    this.phones.removeAt(idx);
  }
}
