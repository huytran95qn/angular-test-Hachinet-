import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PagesComponent } from './pages.component';
import { ReviewMyAnswersComponent } from './review-my-answers/review-my-answers.component';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderCheckboxComponent } from './form-builder/form-builder-checkbox/form-builder-checkbox.component';
import { FormBuilderTextareaComponent } from './form-builder/form-builder-textarea/form-builder-textarea.component';

@NgModule({
  declarations: [
    FormBuilderComponent,
    PagesComponent,
    ReviewMyAnswersComponent,
    FormBuilderCheckboxComponent,
    FormBuilderTextareaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
