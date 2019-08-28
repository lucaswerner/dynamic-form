import { MultiOptionsQuestion } from './question-multi-options';
import { ControlTypeEnum } from '../enums/control-type.enum';

export class RadioButtonQuestion extends MultiOptionsQuestion<string> {
    controlType = ControlTypeEnum.RADIO_BUTTON;

    constructor(options: {} = {}) {
        super(options);
    }
}
