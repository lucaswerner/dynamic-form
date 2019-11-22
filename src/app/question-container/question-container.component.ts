import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { QuestionBase } from '../entities/question-base';
import { GridEnum } from '../enums/grid.enum';
import { QuestionGrid } from '../entities/question-grid';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.less']
})
export class QuestionContainerComponent {

  @Input() questionData: any;
  @Input() formGroup: FormGroup;

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  getGridClass(data: any): string {
    if (this.isArray(data)) {
      return "row";
    }

    const grid = data.grid;

    if (grid instanceof QuestionGrid) {
      return Object.keys(GridEnum).map(key => {
        const gridType = GridEnum[key];
        return this.composeClass(gridType, grid[gridType]);
      })
        .join(' ');
    }

    return this.composeClass(GridEnum.EXTRA_SMALL, grid);
  }

  composeClass(gridType: GridEnum, size: number): string {
    return `col-${gridType}-${size}`;
  }

  getFormControl(question: QuestionBase<any>): AbstractControl {
    return this.formGroup.controls[question.key];
  }
}
