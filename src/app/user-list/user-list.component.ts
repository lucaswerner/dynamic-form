import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { Subscription, of } from "rxjs";
import { UserService } from "../services/user.service";
import { User } from "../entities/user";
import { PagesRoutesService } from "../services/pages-routes.service";
import { AcceptDeclineData } from "../entities/accept-decline-data";
import { AcceptDeclineComponent } from "../accept-decline/accept-decline.component";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.less"]
})
export class UserListComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<User>([]);
  usersSubscription: Subscription;
  deleteUserSubscription: Subscription;

  displayedColumns: string[] = [
    "name",
    "lastName",
    "birthday",
    "gender",
    "email",
    "edit",
    "delete"
  ];

  constructor(
    private userService: UserService,
    private pagesRoutesService: PagesRoutesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.usersSubscription = this.userService
      .getUsers()
      .subscribe(
        users => (this.dataSource = new MatTableDataSource<User>(users))
      );
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
    if (this.deleteUserSubscription) {
      this.deleteUserSubscription.unsubscribe();
    }
  }

  goToEditForm(id: number) {
    this.pagesRoutesService.goToUserEdition(id);
  }

  goToNewForm() {
    this.pagesRoutesService.goToNewUser();
  }

  openDeleteDialog(userToDelete: User) {
    this.deleteUserSubscription = this.dialog
      .open(AcceptDeclineComponent, {
        width: "800px",
        data: new AcceptDeclineData()
      })
      .afterClosed()
      .pipe(
        mergeMap((result: boolean) => {
          if (result) {
            return this.userService.deleteUser(userToDelete);
          }
          return of(null);
        })
      )
      .subscribe((deletedUser: User) => {
        if (deletedUser) {
          const index = this.dataSource.data.indexOf(deletedUser);
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription();
        }
      });
  }
}
