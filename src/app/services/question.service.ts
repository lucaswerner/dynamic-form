import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

import { DropdownQuestion } from '../entities/question-dropdown';
import { QuestionBase } from '../entities/question-base';
import { TextboxQuestion } from '../entities/question-textbox';
import { CheckboxQuestion } from '../entities/question-checkbox';
import { RadioButtonQuestion } from '../entities/question-radio-button';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3,
        validators: [Validators.required]
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        validators: [
          Validators.required,
          Validators.minLength(8)
        ]
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        validators: [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        ]
      }),

      new CheckboxQuestion({
        key: 'agree',
        label: 'Do you agree with terms of condition?',
        order: 10
      }),

      new RadioButtonQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
          { key: 'Male', value: 'male' },
          { key: 'Female', value: 'female' }
        ],
        order: 5
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}