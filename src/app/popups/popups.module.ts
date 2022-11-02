import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';
import { PopupTemplateComponent } from './popup-template/popup-template.component';
import { AddNewQuestionService } from './add-new-question/add-new-question.service';
import { AddAnswerOptionComponent } from './add-new-question/add-answer-option/add-answer-option.component';

@NgModule({
  declarations: [
    AddNewQuestionComponent,
    PopupTemplateComponent,
    AddAnswerOptionComponent,
    AddAnswerOptionComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    AddNewQuestionService
  ],
  entryComponents: [AddNewQuestionComponent]
})
export class PopupsModule { }
