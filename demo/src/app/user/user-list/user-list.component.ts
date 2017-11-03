import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { fadeIn } from "../../common/animation/fade-in";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.less"],
  animations: [fadeIn]
})
export class UserListComponent implements OnInit {
  public users: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onDetail(user: User) {
    this.router.navigate(["user/userDetail", user.id]);
  }

  onEdit(user: User) {
    this.router.navigate(["user/userEdit", user.id]);
  }

  onDelete(user: User) {
    this.userService.deleteUser(user);
  }
  onAdd() {
    this.router.navigate(["user/userEdit", ""]);
  }
}