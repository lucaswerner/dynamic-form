import { QuestionBase } from './question-base';
import { ControlTypeEnum } from '../enums/control-type.enum';

export class TextboxQuestion extends QuestionBase<string> {
    controlType = ControlTypeEnum.INPUT;
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || 'text';
    }
}
