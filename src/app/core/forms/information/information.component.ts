import { Component, Input, OnInit,forwardRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, FormGroup, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InformationComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InformationComponent),
      multi: true,
    },
  ]
})
export class InformationComponent implements OnInit, ControlValueAccessor, Validator {
  @Input()
  labels;

  @Input()
  prefix;

  form: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    let group = {};
    group[this.status] = ['new'];
    group[this.code] = ['', Validators.required];
    group[this.name] = ['', Validators.required];
    group[this.specialty] = '';

    this.form = this.fb.group(group);
  }

  checkRequired(type): boolean {
    let code = this.form.get(this[type]);
    return code.touched && !code.valid;
  }

  // Getters
  get status() {
    return `${this.prefix}Status`;
  }

  get code() {
    return `${this.prefix}Code`;
  }

  get name() {
    return `${this.prefix}Name`;
  }

  get specialty() {
    return `${this.prefix}Specialty`;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors {
    return this.form.valid ? null : { data: true };
  }
  writeValue(data): void {
    this.form.patchValue(data, { emitEvent: false});
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
