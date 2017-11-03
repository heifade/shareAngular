import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import { Form, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { fadeIn } from "../../common/animation/fade-in";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.less"],
  animations: [fadeIn]
})
export class RegisterComponent implements OnInit {
  public user: User;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = new User(null, "", "");
  }

  onSubmit(form: NgForm) {

    if(form.invalid) {
      return;
    }

    this.userService.saveUser(this.user);
    this.router.navigate(["user/userList"]);

    alert(JSON.stringify(this.user));
  }
}
