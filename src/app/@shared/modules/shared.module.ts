import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DECLARATIONS: any = [];

const MODULES = [ReactiveFormsModule, FormsModule];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MODULES],
  exports: [...DECLARATIONS, ...MODULES]
})
export class SharedModule {}
