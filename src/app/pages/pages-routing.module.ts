import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ReviewMyAnswersComponent } from './review-my-answers/review-my-answers.component';

const routes: Routes = [
  {
    path: 'form',
    children: [
      {
        path: 'builder',
        component: FormBuilderComponent
      },
      {
        path: 'answers',
        component: ReviewMyAnswersComponent
      },
      {
        path: '',
        redirectTo: 'builder',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
