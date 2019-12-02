import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { QuestionControlService } from "../services/question-control.service";
import { DynamicFormData } from "../entities/dynamic-form-data";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.less"],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() dynamicFormData$: Observable<DynamicFormData>;
  dynamicFormData: DynamicFormData;

  dynamicFormDataSubscription: Subscription;
  submitSubscription: Subscription;
  cancelSubscription: Subscription;

  form: FormGroup;
  submitting = false;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.dynamicFormDataSubscription = this.dynamicFormData$.subscribe(data => {
      this.dynamicFormData = data;
      this.form = this.qcs.toFormGroup(data.questions);
    });
  }

  ngOnDestroy() {
    this.dynamicFormDataSubscription.unsubscribe();

    if (this.submitSubscription) {
      this.submitSubscription.unsubscribe();
    }

    if (this.cancelSubscription) {
      this.cancelSubscription.unsubscribe();
    }
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

  get submitDisabled(): boolean {
    return !this.form.valid || !this.form.dirty || this.submitting;
  }

  private startAction() {
    this.submitting = true;
    this.form.disable();
  }

  private endAction() {
    this.submitting = false;
    this.form.enable();
  }

  submit() {
    this.startAction();
    this.submitSubscription = this.dynamicFormData.onSubmit
      .action(this.form.value)
      .subscribe(() => {
        this.endAction();
      });
  }

  cancel() {
    this.startAction();
    this.cancelSubscription = this.onCancel
      .action(this.form.value)
      .subscribe(() => {
        this.endAction();
      });
  }
}
