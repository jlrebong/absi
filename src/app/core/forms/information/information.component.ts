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
  @Input() maxLength1;

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
      nameLast: [this.information.nameLast, Validators.required],
      nameFirst: [this.information.nameFirst, Validators.required],
      nameMiddleInitial: this.information.nameMiddleInitial,
      namePrefix: [this.information.namePrefix, Validators.required],
      nameSuffix: this.information.nameSuffix,
      email: this.information.email,
    });

    this.form.valueChanges.subscribe((e) => {
      this.data.emit(e);
    });
  }

  checkRequired(type): boolean {
    let code = this.form.get(type);
    return code.touched && !code.valid;
  }

  getFullName(): string {
    const firstName = this.information.nameFirst || '';
    const middleInitial = this.information.nameMiddleInitial || '';
    const lastName = this.information.nameLast || '';
    const namePrefix = this.information.namePrefix || '';
    const nameSuffix = this.information.nameSuffix || '';

    // Join name components without extra spaces
    const nameComponents = [
      namePrefix,
      firstName,
      middleInitial,
      lastName,
      nameSuffix,
    ].filter(Boolean);
    return nameComponents.join(' ');
  }
}
