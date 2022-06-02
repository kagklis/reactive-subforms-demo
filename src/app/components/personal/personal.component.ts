import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class PersonalComponent implements OnInit, OnDestroy {
  parentForm!: FormGroup;
  genderOptions: string[];
  subscription: Subscription;

  constructor(
    private parent: FormGroupDirective,
    private fb: FormBuilder,
    dataService: DataService
  ) {
    this.subscription = new Subscription();
    this.genderOptions = dataService.getGenders();
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl(
      'personal',
      this.fb.group({
        first: ['', Validators.required],
        last: ['', Validators.required],
        gender: ['', Validators.required],
        genderOther: ['', Validators.required],
      })
    );

    this.subscription.add(
      this.parentForm
        .get('personal')
        ?.get('gender')
        ?.valueChanges.subscribe((value) => {
          const genderOther = this.parentForm
            .get('personal')
            ?.get('genderOther');
          if (value === 'Other') {
            genderOther?.setValidators(Validators.required);
          } else {
            genderOther?.clearValidators();
          }
          genderOther?.setValue('');
          genderOther?.markAsUntouched();
          genderOther?.updateValueAndValidity();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
