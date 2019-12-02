import { Component, OnInit } from "@angular/core";

import { QuestionService } from "./services/question.service";
import { DynamicFormData } from "./entities/dynamic-form-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  providers: [QuestionService]
})
export class AppComponent {}
