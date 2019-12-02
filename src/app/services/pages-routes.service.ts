import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PagesRoutesService {
  constructor(private router: Router) {}

  goToUserList() {
    this.router.navigate(["user"]);
  }

  goToNewUser() {
    this.router.navigate(["user/new"]);
  }

  goToUserEdition(id: number) {
    this.router.navigate([`user/${id}`]);
  }
}
