import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{
   
  @Input()
  labels;

  form = this.fb.group({
    status: ['1'],
    code: ["", Validators.required],
    name: ["",  Validators.required],
    specialty: ""
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form.get('status')?.valueChanges.subscribe(id=>console.log(id));
    this.form.get('code')?.valueChanges.subscribe(id=>console.log(id));
    this.form.get('name')?.valueChanges.subscribe(id=>console.log(id));
    this.form.get('specialty')?.valueChanges.subscribe(id=>console.log(id));
  }

  checkRequired(type): boolean {
    let code = this.form.get(type);
    return code.touched && !code.valid;
  }

}
