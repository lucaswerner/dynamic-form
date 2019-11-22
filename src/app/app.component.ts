import { Component, OnInit } from "@angular/core";

import { QuestionService } from "./services/question.service";
import { DynamicFormData } from './entities/dynamic-form-data';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [QuestionService]
})
export class AppComponent implements OnInit {
  dynamicFormData: DynamicFormData = new DynamicFormData();

  constructor(private service: QuestionService) { }

  ngOnInit() {
    this.service.getDynamicFormData()
      .subscribe(dynamicFormData => this.dynamicFormData = dynamicFormData);
  }
}
