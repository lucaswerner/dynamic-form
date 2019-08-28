import { MultiOptionsQuestion } from './question-multi-options';
import { ControlTypeEnum } from '../enums/control-type.enum';

export class DropdownQuestion extends MultiOptionsQuestion<string> {
    controlType = ControlTypeEnum.SELECT;

    constructor(options: {} = {}) {
        super(options);
    }
}
