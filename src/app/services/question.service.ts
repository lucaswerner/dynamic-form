import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";

import { DropdownQuestion } from "../entities/question-dropdown";
import { QuestionBase } from "../entities/question-base";
import { TextboxQuestion } from "../entities/question-textbox";
import { CheckboxQuestion } from "../entities/question-checkbox";
import { RadioButtonQuestion } from "../entities/question-radio-button";
import { DynamicFormData } from "../entities/dynamic-form-data";

@Injectable()
export class QuestionService {
  private save = (values: object) => {
    console.log(values);
    return of(values).pipe(delay(5000));
  };

  getDynamicFormData(): Observable<DynamicFormData> {
    return of(
      new DynamicFormData({
        title: "Dynamic Form",
        onSubmit: {
          label: "Save",
          action: this.save
        },
        questions: this.getQuestions()
      })
    );
  }

  getQuestions(): QuestionBase<any>[][] {
    return [
      [
        new DropdownQuestion({
          key: "brave",
          label: "Bravery Rating",
          options: [
            { key: "solid", value: "Solid" },
            { key: "great", value: "Great" },
            { key: "good", value: "Good" },
            { key: "unproven", value: "Unproven" }
          ],
          validators: [Validators.required],
          grid: 4
        }),

        new TextboxQuestion({
          key: "firstName",
          label: "First name",
          value: "Bombasto",
          required: true,
          validators: [Validators.required, Validators.minLength(8)],
          grid: 8
        })
      ],
      [
        new TextboxQuestion({
          key: "emailAddress",
          label: "Email",
          type: "email",
          validators: [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
          ],
          grid: 5
        }),

        new CheckboxQuestion({
          key: "agree",
          label: "Do you agree with terms of condition?",
          grid: 7
        })
      ],
      [
        new RadioButtonQuestion({
          key: "gender",
          label: "Gender",
          options: [
            { key: "Male", value: "male" },
            { key: "Female", value: "female" }
          ],
          validators: [Validators.required]
        })
      ]
    ];
  }
}
