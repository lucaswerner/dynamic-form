import { QuestionBase } from "./question-base";
import { Observable, of } from "rxjs";
import { DynamicFormOption } from "./dynamic-form-option";

export class DynamicFormData {
  title: string;
  questions: QuestionBase<any>[][];
  onSubmit: DynamicFormOption;
  onCancel?: DynamicFormOption;

  constructor(
    options: {
      title: string;
      questions: QuestionBase<any>[][];
      onSubmit: DynamicFormOption;
      onCancel?: DynamicFormOption;
    } = {
      title: "Form",
      questions: [],
      onSubmit: new DynamicFormOption(),
      onCancel: new DynamicFormOption()
    }
  ) {
    this.questions = options.questions;
    this.onSubmit = options.onSubmit;
    this.onCancel = options.onCancel;
    this.title = options.title;
  }
}
