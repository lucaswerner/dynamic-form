import { Validators } from '@angular/forms';
import { ControlTypeEnum } from '../enums/control-type.enum';

export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: ControlTypeEnum;
    validators: Validators[];

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: ControlTypeEnum,
        validators?: Validators[]
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || ControlTypeEnum.INPUT;
        this.validators = options.validators || [];
    }
}
