import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionBase } from '../entities/question-base';

@Injectable()
export class QuestionControlService {
  constructor(private fb: FormBuilder) { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = [question.value || '', question.validators];
    });
    return this.fb.group(group);
  }
}
