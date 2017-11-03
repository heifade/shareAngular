import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { User } from "../user.model";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { UserService } from "../user.service";
import { Observable } from "rxjs/Observable";
import { fadeIn } from "../../common/animation/fade-in";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.less"],
  animations: [fadeIn]
})
export class UserEditComponent implements OnInit {
  public user: User;
  public doType: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap
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
    this.location.back();
  }

  onClose() {
    this.location.back();
  }
}
