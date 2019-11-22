import { Observable, of } from 'rxjs';

export class DynamicFormOption {
    label: string;
    action: (...args) => Observable<any>;

    constructor(options:
        {
            label: string,
            action: (...args) => Observable<any>
        } =
        {
            label: 'Option',
            action: (value) => of(value)
        }) {
        this.label = options.label;
        this.action = options.action;
    }
}
