import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgForm, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LocationComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LocationComponent),
      multi: true,
    },
  ]
})
export class LocationComponent implements ControlValueAccessor, Validator {
  form = this.fb.group({
    address: "",
    country: "",
    province: "",
    city: "",
    zip: ""
  });

  constructor(private fb: FormBuilder) {}


  // Boiler Plate Code
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
