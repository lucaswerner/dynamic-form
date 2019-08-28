import { QuestionBase } from './question-base';

export class MultiOptionsQuestion<T> extends QuestionBase<T> {
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
