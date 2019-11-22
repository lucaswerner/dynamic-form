import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { QuestionControlService } from "../services/question-control.service";
import { DynamicFormData } from "../entities/dynamic-form-data";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.less"],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() dynamicFormData: DynamicFormData;
  form: FormGroup;
  submitting = false;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  get questions() {
    return this.dynamicFormData.questions;
  }

  get onSubmit() {
    return this.dynamicFormData.onSubmit;
  }

  get onCancel() {
    return this.dynamicFormData.onCancel;
  }

  submit() {
    this.submitting = true;
    this.form.disable();
    this.dynamicFormData.onSubmit.action(this.form.value).subscribe(result => {
      this.submitting = false;
      this.form.enable();
    });
  }

  cancel() {
    this.submitting = true;
    this.form.disable();
    this.onCancel.action(this.form.value).subscribe(() => {
      this.submitting = false;
      this.form.enable();
    });
  }
}
