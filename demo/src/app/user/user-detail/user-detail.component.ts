import { Component, OnInit, Input } from "@angular/core";
import { User } from "../user.model";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";
import { UserService } from "../user.service";
import { fadeIn } from "../../common/animation/fade-in";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.less"],
  animations: [fadeIn]
})
export class UserDetailComponent implements OnInit {
  public user: User;
  public genderClass: {};
  public genderStyle: {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap
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
    this.location.back();
  }
}
