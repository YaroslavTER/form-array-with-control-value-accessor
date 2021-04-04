import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      users: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }

  get users() {
    return this.form.get("users") as FormArray;
  }

  addUser() {
    this.users.push(this.formBuilder.control(''));
  }
  
}
