import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  @Input()
  location;

  @Output()
  data = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      address: this.location.address,
      country: this.location.country,
      province: this.location.province,
      city: this.location.city,
      zip: this.location.zip,
    });

    this.form.valueChanges.subscribe((e) => {
      this.data.emit(e);
    });
  }
}
