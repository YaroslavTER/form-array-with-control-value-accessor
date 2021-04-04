import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  userInfo: FormGroup;

  onChange  = (value) => {};

  onTouched = (value) => {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userInfo = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  writeValue(value): void {
    console.log(value)
    value && this.userInfo.setValue(value, {emitEvent: false});
  }

  registerOnChange(fn: any): void {
    console.log("on change");
    this.userInfo.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log("on touched");
    this.onTouched = fn;
  }

}
