import { Component, OnInit, OnDestroy } from "@angular/core";
import { LifeCycleChildViewComponent } from "./life-cycle-child-view/life-cycle-child-view.component";
import { fadeIn } from "../common/animation/fade-in";

@Component({
  selector: "app-life-cycle",
  templateUrl: "./life-cycle.component.html",
  styleUrls: ["./life-cycle.component.css"],
  animations: [fadeIn]
})
export class LifeCycleComponent implements OnInit, OnDestroy {
  private index: number = 0;
  private value1: string = "";
  private value2: string = "";

  public childList: Array<{
    index: number;
    value1: string;
    value2: string;
  }> = [];

  constructor() {}

  onAdd() {
    this.childList.push({
      index: ++this.index,
      value1: this.value1,
      value2: this.value2
    });
  }
  onDelete(d) {
    this.childList.splice(this.childList.indexOf(d), 1);
  }

  ngOnInit() {
    console.log("parent ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("parent ngOnDestroy");
  }
}
