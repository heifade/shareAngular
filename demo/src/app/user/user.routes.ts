import { UserComponent } from "./user.component";
import { Route, RouterModule } from "@angular/router";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { NgModule } from "@angular/core";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RegisterComponent } from "./register/register.component";
import { Register2Component } from "./register2/register2.component";

const userRoutes: Route[] = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "", redirectTo: "userList", pathMatch: "full" },
      { path: "userList", component: UserListComponent },
      { path: "userDetail/:id", component: UserDetailComponent },
      { path: "userEdit/:id", component: UserEditComponent },
      { path: "register", component: RegisterComponent },
      { path: "register2", component: Register2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
