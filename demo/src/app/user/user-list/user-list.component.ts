import { Component, OnInit, HostBinding } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { fadeIn } from "../../common/animation/fade-in";
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from "../animations";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.less"],
  animations: [slideInDownAnimation]
})
export class UserListComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  public users: Observable<User[]>;
  public selectedUserId: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.activatedRoute.paramMap.switchMap((params: ParamMap) => {
      this.selectedUserId = Number(params.get("id"));
      return Observable.of(null);
    }).subscribe();
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
