import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class AddressComponent implements OnInit {
  parentForm!: FormGroup;
  stateOptions: string[];
  constructor(
    private parent: FormGroupDirective,
    private fb: FormBuilder,
    dataService: DataService
  ) {
    this.stateOptions = dataService.getStates();
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl(
      'address',
      this.fb.group({
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
      })
    );
  }
}
