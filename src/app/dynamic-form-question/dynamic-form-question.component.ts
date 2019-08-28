import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { QuestionBase } from '../entities/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() formGroup: FormGroup;
  @Input() abstractControl: AbstractControl;

  get hasErrorMessage(): boolean {
    return this.abstractControl.invalid && (this.abstractControl.dirty || this.abstractControl.touched);
  }

  get errorMessage(): string {
    const label = this.question.label;
    const errors = this.abstractControl.errors;

    if (errors.required) {
      return `${label} is required`;
    }

    if (errors.minlength) {
      return `${label} should be at least ${errors.minlength.requiredLength} characters`;
    }

    if (errors.pattern) {
      return `Invalid ${label}`;
    }

    return 'Unmapped error';
  }
}
