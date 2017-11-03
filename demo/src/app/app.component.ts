import { Component } from "@angular/core";
import { MenuItemData } from "./sidebar-menu/sidebar-menu-item.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  public menuItemList: Array<MenuItemData> = [
    { text: "首页", icon: "date_range", url: "index" },
    { text: "用户管理", icon: "date_range", url: "user" },
    { text: "用户注册(模板驱动验证)", icon: "date_range", url: "user/register" },
    { text: "用户注册(响应式表单验证)", icon: "date_range", url: "user/register2" },
    { text: "生命周期", icon: "date_range", url: "lifeCycle" },
    { text: "组件嵌套", icon: "date_range", url: "nesting" },
    { text: "结构型指令", icon: "date_range", url: "structure" }
  ];

  constructor(private router: Router) {}

  onMenuItemClick(e: MenuItemData) {
    this.router.navigateByUrl(e.url);
  }
}
