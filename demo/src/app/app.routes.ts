import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { IndexComponent } from "./index/index.component";
import { LifeCycleComponent } from "./life-cycle/life-cycle.component";
import { NestingComponent } from "./nesting/nesting.component";
import { StructureComponent } from "./structure/structure.component";

const appRoutes: Route[] = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
  { path: "lifeCycle", component: LifeCycleComponent },
  { path: "nesting", component: NestingComponent },
  { path: "structure", component: StructureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
