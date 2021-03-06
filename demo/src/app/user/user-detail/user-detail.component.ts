import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { User } from "../user.model";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";
import { UserService } from "../user.service";
import { slideInDownAnimation } from "../animations";


@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.less"],
  animations: [ slideInDownAnimation ]
})
export class UserDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;

  public user: User;
  public genderClass: {};
  public genderStyle: {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) =>
        this.userService.getUser(+params.get("id"))
      )
      .subscribe(user => (this.user = user));

    this.genderClass = {
      male: this.user.gender === "男",
      female: this.user.gender === "女"
    };
    this.genderStyle = {
      "font-size": "2em",
      "background-color": this.user.gender === "女" ? "red" : "blue",
      color: this.user.gender === "女" ? "blue" : "red"
    };
  }

  onClose() {
    // this.location.back();
    this.router.navigate(["/user/userList", { id: this.user.id }]);
  }
}
