import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form.value);
  }
}
