import { Component, OnInit } from "@angular/core";
import { DynamicFormData } from "../entities/dynamic-form-data";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.less"]
})
export class UserEditComponent implements OnInit {
  editUserDynamicForm$: Observable<DynamicFormData>;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];

    this.editUserDynamicForm$ = this.userService.getUserEditForm(Number(id));
  }
}
