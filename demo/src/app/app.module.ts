import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CommonComponentModule } from "./common/common.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";

import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";
import { SidebarMenuItemComponent } from "./sidebar-menu/sidebar-menu-item.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { IndexComponent } from "./index/index.component";
import { LifeCycleComponent } from "./life-cycle/life-cycle.component";
import { LifeCycleChildViewComponent } from "./life-cycle/life-cycle-child-view/life-cycle-child-view.component";
import { NestingComponent } from "./nesting/nesting.component";
import { NestingChildComponent } from "./nesting/nesting-child/nesting-child.component";
import { NestingParentComponent } from "./nesting/nesting-parent/nesting-parent.component";
import { StructureComponent } from "./structure/structure.component";
import { NotDirective } from "./common/not/not.directive";


@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    IndexComponent,
    LifeCycleComponent,
    LifeCycleChildViewComponent,
    NestingComponent,
    NestingChildComponent,
    NestingParentComponent,
    StructureComponent,
    NotDirective,
  ],
  imports: [
    BrowserModule,
    CommonComponentModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
