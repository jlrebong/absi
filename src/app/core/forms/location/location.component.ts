import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  @Input()
  initialValue;

  @Output()
  data = new EventEmitter();

  form: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      address: this.initialValue.address,
      country: this.initialValue.country,
      province: this.initialValue.province,
      city: this.initialValue.city,
      zip: this.initialValue.zip
    });

    this.form.valueChanges.subscribe(e => this.data.emit(e));
  }


}
