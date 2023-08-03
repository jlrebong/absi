import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  @Input()
  labels;

  @Input() maxLength;
  @Input() TINmaxLength;
  @Input() accountNoMaxLength;

  @Input()
  information;

  @Output()
  data = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      status: [this.information.status],
      code: [this.information.code, Validators.required],
      name: [this.information.name, Validators.required],
      specialty: this.information.specialty,
      tin: this.information.tin,
      accountNo: this.information.accountNo,
    });

    this.form.valueChanges.subscribe((e) => {
      this.data.emit(e);
    });
  }

  checkRequired(type): boolean {
    let code = this.form.get(type);
    return code.touched && !code.valid;
  }
}
