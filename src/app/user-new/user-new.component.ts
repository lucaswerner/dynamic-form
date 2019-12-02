import { Component, OnInit } from "@angular/core";
import { DynamicFormData } from "../entities/dynamic-form-data";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-new",
  templateUrl: "./user-new.component.html",
  styleUrls: ["./user-new.component.less"],
  providers: [UserService]
})
export class UserNewComponent implements OnInit {
  newUserDynamicForm$: Observable<DynamicFormData>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.newUserDynamicForm$ = this.userService.getUserSaveForm();
  }
}
