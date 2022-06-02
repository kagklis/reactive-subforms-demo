import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequiredFieldComponent } from './required-field/required-field.component';
import { RequiredSelectComponent } from './required-select/required-select.component';

@NgModule({
  declarations: [
    RequiredFieldComponent,
    RequiredSelectComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RequiredFieldComponent,
    RequiredSelectComponent
  ],
})
export class SharedModule {}
