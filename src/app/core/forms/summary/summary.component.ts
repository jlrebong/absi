import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit  {
  @Input() title: string;
  @Input() header: string;

  @Input()
  summary;

  @Output()
  onAgree = new EventEmitter();

  form = this.fb.group({
    agree: false,
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form.get('agree').statusChanges.subscribe(e=>{
      this.onAgree.emit(e);
    });
  }

  isDate(value: any): boolean {
    return value instanceof Date && !isNaN(value.getTime());
  }
}
