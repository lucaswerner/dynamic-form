import { Validators } from "@angular/forms";
import { ControlTypeEnum } from "../enums/control-type.enum";
import { QuestionGrid } from "./question-grid";

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  controlType: ControlTypeEnum;
  validators: Validators[];
  grid: number | QuestionGrid;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      controlType?: ControlTypeEnum;
      validators?: Validators[];
      grid?: number | QuestionGrid;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.controlType = options.controlType || ControlTypeEnum.INPUT;
    this.validators = options.validators || [];
    this.grid = options.grid || 12;
  }
}
