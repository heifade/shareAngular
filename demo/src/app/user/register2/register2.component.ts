import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import {
  Form,
  NgForm,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { fadeIn } from "../../common/animation/fade-in";
import { errorInOut } from "../../common/animation/error-inout";

@Component({
  selector: "app-register2",
  templateUrl: "./register2.component.html",
  styleUrls: ["./register2.component.less"],
  animations: [fadeIn, errorInOut]
})
export class Register2Component implements OnInit {
  public user: User;
  public registerForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.user = new User(null, "", "");

    this.registerForm = this.formBuilder.group({
      userid: ["", [Validators.required]],
      username: ["", [Validators.required, Validators.minLength(2)]],
      usergender: ["", [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      return;
    }

    this.userService.saveUser(this.user);
    this.router.navigate(["user/userList"]);

    alert(JSON.stringify(this.user));
  }

  isShowError(ctrlName: string, form: NgForm) {
    let ctrl = this.registerForm.controls[ctrlName];
    return ctrl.invalid && (ctrl.dirty || ctrl.touched || form.submitted);
  }
}
