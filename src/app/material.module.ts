import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatRadioModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule
} from "@angular/material";

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
