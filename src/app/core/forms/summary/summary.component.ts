import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() title: string;
  @Input() header: string;

  @Input()
  summary;

  @Output()
  data = new EventEmitter();

  form = this.fb.group({
    agree: false,
  });

  constructor(private fb: FormBuilder) {}
}
