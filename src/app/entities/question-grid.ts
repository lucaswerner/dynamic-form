export class QuestionGrid {
    xs: number;
    sm: number;
    md: number;
    lg: number;

    constructor(options: {
        xs: number,
        sm: number,
        md: number,
        lg: number
    } = {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12
        }) {
        this.xs = options.xs;
        this.sm = options.sm;
        this.md = options.md;
        this.lg = options.lg;
    }
}