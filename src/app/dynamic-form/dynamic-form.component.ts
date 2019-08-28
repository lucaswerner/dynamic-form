import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { QuestionBase } from '../entities/question-base';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  getFormControl(question: QuestionBase<any>): AbstractControl {
    return this.form.controls[question.key];
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}