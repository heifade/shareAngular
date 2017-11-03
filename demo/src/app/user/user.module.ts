import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { UserComponent } from "./user.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserService } from "./user.service";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserRoutingModule } from "./user.routes";
import { UserListComponent } from "./user-list/user-list.component";
import { RegisterComponent } from "./register/register.component";

import { CommonComponentModule } from "../common/common.module";
import { Register2Component } from "./register2/register2.component";
import { ErrorComponent } from "./error/error.component";


@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    RegisterComponent,
    Register2Component,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    CommonComponentModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,
  ],
  exports: [

  ],
  providers: [UserService]
})
export class UserModule {}
