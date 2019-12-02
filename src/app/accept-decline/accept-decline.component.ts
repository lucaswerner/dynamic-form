import { Component, Inject } from "@angular/core";
import { AcceptDeclineData } from "../entities/accept-decline-data";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-accept-decline",
  templateUrl: "./accept-decline.component.html",
  styleUrls: ["./accept-decline.component.less"]
})
export class AcceptDeclineComponent {
  constructor(
    public dialogRef: MatDialogRef<AcceptDeclineComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: AcceptDeclineData
  ) {}

  onClick(accepted: boolean) {
    this.dialogRef.close(accepted);
  }
}
