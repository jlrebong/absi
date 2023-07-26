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
    this.form = this.fb.group({
      status: ['new'],
      code: ['', Validators.required],
      name: ['', Validators.required],
      specialty: "",
    });
  }

  checkRequired(type): boolean {
    let code = this.form.get(type);
    return code.touched && !code.valid;
  }

  

  // Boiler Plate Code
  validate(control: AbstractControl<any, any>): ValidationErrors {
    return this.form.valid ? null : { data: true };
  }
  writeValue(data): void {
    console.log('write', data);
    this.form.patchValue(data, { emitEvent: false});
  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
    this.form.valueChanges.subscribe(fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
