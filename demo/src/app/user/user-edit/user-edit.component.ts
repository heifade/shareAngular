import { Component, OnInit, Input, OnDestroy, HostBinding } from "@angular/core";
import { User } from "../user.model";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Location } from "@angular/common";
import { UserService } from "../user.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from "../animations";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.less"],
  animations: [ slideInDownAnimation ]
})
export class UserEditComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  public user: User;
  public doType: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => {
        let id = params.get("id");
        if (id) {
          this.doType = "edit";
          let user = this.userService.getUser(Number(id));
          return user;
        } else {
          this.doType = "add";
          return Observable.of<User>(new User(null, "", ""));
        }
      })
      .subscribe(user => (this.user = user));
  }

  onSave() {
    this.user.id = Number(this.user.id);
    this.userService.saveUser(this.user);
    this.onClose();
  }

  onClose() {
    this.router.navigate(["/user/userList", { id: this.user.id }]);
  }
}
