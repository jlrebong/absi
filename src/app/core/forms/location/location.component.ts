import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  form = this.fb.group({
    address: "",
    country: "",
    province: "",
    city: "",
    zip: ""
  });

  constructor(private fb: FormBuilder) {}
}
