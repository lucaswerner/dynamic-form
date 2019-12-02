import { Injectable } from "@angular/core";
import { User } from "../entities/user";
import { GenderEnum } from "../enums/gender.enum";
import { Observable, of } from "rxjs";
import { TextboxQuestion } from "../entities/question-textbox";
import { QuestionBase } from "../entities/question-base";
import { Validators } from "@angular/forms";
import { RadioButtonQuestion } from "../entities/question-radio-button";
import { CheckboxQuestion } from "../entities/question-checkbox";
import { DynamicFormData } from "../entities/dynamic-form-data";
import { termsMustBeAccepted } from "../validators/checkbox.validator";
import { PagesRoutesService } from "./pages-routes.service";
import { map, delay } from "rxjs/operators";

const userList: Array<User> = [
  {
    id: 1,
    firstName: "Racam",
    lastName: "Fernandes",
    birthday: "1994-02-23",
    gender: GenderEnum.MALE,
    email: "racam.fernandes@email.com",
    password: "mypassword"
  },
  {
    id: 2,
    firstName: "Cristiano",
    lastName: "Ronaldo",
    birthday: "1984-06-03",
    gender: GenderEnum.MALE,
    email: "cristiano.ronaldo@email.com",
    password: "mypassword2"
  },
  {
    id: 3,
    firstName: "Scarlet",
    lastName: "Johanson",
    birthday: "1988-09-10",
    gender: GenderEnum.FEMALE,
    email: "scarlet.scarlet@email.com",
    password: "herpassword"
  }
];

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private pagesRoutesService: PagesRoutesService) {}

  getUsers(): Observable<Array<User>> {
    return of(userList);
  }

  getUser(id: number): Observable<User> {
    return of(userList.find(user => user.id === id));
  }

  saveUser(user: User): Observable<User> {
    const newUser = {
      ...user,
      id: userList[userList.length - 1].id + 1
    };
    userList.push(newUser);
    return of(newUser).pipe(delay(2500));
  }

  saveUserAndGoToUserList(user: User) {
    return this.saveUser(user).pipe(
      map(savedUser => {
        this.pagesRoutesService.goToUserList();
        return savedUser;
      })
    );
  }

  updateUser(updatedUser: User): Observable<User> {
    const index = userList.findIndex(
      user => Number(user.id) === Number(updatedUser.id)
    );
    userList[index] = updatedUser;
    return of(updatedUser).pipe(delay(5000));
  }

  updateUserAndGoToUserList(user: User) {
    return this.updateUser(user).pipe(
      map(updatedUser => {
        this.pagesRoutesService.goToUserList();
        return updatedUser;
      })
    );
  }

  deleteUser(user: User): Observable<User> {
    return of(user);
  }

  getUserSaveForm() {
    return of(
      new DynamicFormData({
        title: "New User",
        onSubmit: {
          label: "Save",
          action: (user: User) => this.saveUserAndGoToUserList(user)
        },
        onCancel: {
          label: "Cancel",
          action: () => of(this.pagesRoutesService.goToUserList())
        },
        questions: this.getUserFormFields()
      })
    );
  }

  getUserEditForm(id: number): Observable<DynamicFormData> {
    return this.getUser(id).pipe(
      map((user: User) => {
        console.log(user);

        return new DynamicFormData({
          title: "Edit User",
          onSubmit: {
            label: "Edit",
            action: (updatedUser: User) =>
              this.updateUserAndGoToUserList({ id, ...updatedUser })
          },
          onCancel: {
            label: "Cancel",
            action: () => of(this.pagesRoutesService.goToUserList())
          },
          questions: this.getUserFormFields(user, true)
        });
      })
    );
  }

  getUserFormFields(
    user: User = new User(),
    edit = false
  ): QuestionBase<any>[][] {
    const nameValidators = [Validators.required, Validators.minLength(4)];
    const editFields = [
      [
        new TextboxQuestion({
          key: "firstName",
          label: "First Name",
          value: user.firstName,
          validators: nameValidators,
          grid: 6
        }),
        new TextboxQuestion({
          key: "lastName",
          label: "Last Name",
          value: user.lastName,
          validators: nameValidators,
          grid: 6
        })
      ],
      [
        new TextboxQuestion({
          key: "birthday",
          label: "BirthDay",
          value: user.birthday,
          type: "date",
          validators: [Validators.required],
          grid: 8
        }),
        new RadioButtonQuestion({
          key: "gender",
          label: "Gender",
          value: user.gender,
          options: [
            { value: GenderEnum.FEMALE, label: "Female" },
            { value: GenderEnum.MALE, label: "Male" }
          ],
          validators: [Validators.required],
          grid: 4
        })
      ],
      [
        new TextboxQuestion({
          key: "email",
          label: "Email",
          value: user.email,
          type: "email",
          validators: [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
          ]
        })
      ],
      [
        new TextboxQuestion({
          key: "password",
          label: "Password",
          value: user.password,
          type: "password",
          validators: [Validators.required, Validators.minLength(8)]
        })
      ]
    ];

    return edit
      ? editFields
      : [
          ...editFields,
          [
            new CheckboxQuestion({
              key: "agree",
              label: "Do you agree with terms of condition?",
              validators: [termsMustBeAccepted]
            })
          ]
        ];
  }
}
