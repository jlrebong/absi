import {Component, Input, OnInit, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, Validators, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors} from '@angular/forms';
import { Phone } from '../../models/phone-model';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneFormComponent),
      multi: true,
    },
  ]
})
export class PhoneFormComponent implements OnInit, ControlValueAccessor, Validator {
  phoneForm:FormGroup;

  submitted=false;

  @Input()
  phone: Phone;

  typeList = [
    {id: "1", title:'Mobile' },
    {id: "2", title:'Home' },
    {id: "3", title:'Work' },
    {id: "4", title:'Main' },
    {id: "5", title:'Work Fax' },
    {id: "6", title:'Home Fax' },
    {id: "7", title:'Pager' },
    {id: "8", title:'Other' },
  ];

  constructor(private fb: FormBuilder) {}
  validate(control: AbstractControl<any, any>): ValidationErrors {
    return this.phoneForm.valid ? null : { phone: true };
  }
  writeValue(phone: Phone): void {
    this.phoneForm.patchValue(phone, { emitEvent: false});
  }
  registerOnChange(fn: any): void {
    this.phoneForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.phoneForm.valueChanges.subscribe(fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.phoneForm.disable() : this.phoneForm.enable();
  }



  ngOnInit(): void {
    this.phoneForm = this.fb.group({
      type: [this.phone?.type, Validators.required],
      number: [this.phone?.number, Validators.required],
      status: [this.phone?.status, Validators.required],
    });

    this.phoneForm.get('type')?.valueChanges.subscribe(id=>console.log(id));
  }

  onSubmit(): void {
    console.log('submitted form', this.phoneForm.value, this.phoneForm.invalid);
    this.submitted=true;
  }

  valid(element: string) {
    return this.phoneForm?.get(element)?.invalid && 
    (this.phoneForm?.get(element)?.touched || 
    this.phoneForm?.get(element)?.dirty || 
    this.submitted);
  }
}
