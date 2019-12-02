import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserNewComponent } from "./user-new/user-new.component";

const routes: Routes = [
  {
    path: "user",
    children: [
      {
        path: "",
        component: UserListComponent
      },
      {
        path: "new",
        component: UserNewComponent
      },
      {
        path: ":id",
        component: UserEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
