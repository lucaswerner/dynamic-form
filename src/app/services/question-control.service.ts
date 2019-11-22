import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionBase } from '../entities/question-base';

@Injectable()
export class QuestionControlService {
  constructor(private fb: FormBuilder) { }

  toFormGroup(questionsData: QuestionBase<any>[][]) {
    const group = this.questionDataToObject(questionsData);

    return this.fb.group(group);
  }

  private questionDataToObject(questionsListOfList): object {
    return questionsListOfList.reduce((accumulator, questions) => {

      if (Array.isArray(questions)) {
        return {
          ...accumulator,
          ...this.questionDataToObject(questions)
        };
      }

      return {
        ...accumulator, [questions.key]: [questions.value || '', questions.validators]
      };
    }, {});
  }
}
