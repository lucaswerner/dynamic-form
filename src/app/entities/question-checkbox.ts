import { QuestionBase } from './question-base';
import { ControlTypeEnum } from '../enums/control-type.enum';

export class CheckboxQuestion extends QuestionBase<boolean> {
    controlType = ControlTypeEnum.CHECKBOX;

    constructor(options: {} = {}) {
        super(options);
    }
}
