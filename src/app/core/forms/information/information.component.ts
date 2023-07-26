import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  @Input()
  labels;

  @Input()
  initialValue;

  @Output()
  data = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      status: [this.initialValue.status],
      code: [this.initialValue.code, Validators.required],
      name: [this.initialValue.name, Validators.required],
      specialty: this.initialValue.specialty,
    });
    
    this.form.valueChanges.subscribe(e => this.data.emit(e));
  }

  checkRequired(type): boolean {
    let code = this.form.get(type);
    return code.touched && !code.valid;
  }

  

  
}
