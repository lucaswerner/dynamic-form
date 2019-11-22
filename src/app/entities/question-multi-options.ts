import { QuestionBase } from "./question-base";
import { Option } from "./option";

export class MultiOptionsQuestion<T> extends QuestionBase<T> {
  options: Array<Option> = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options["options"] || [];
  }
}
