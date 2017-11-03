import {
  Component,
  OnInit,
  ViewChild,
  ContentChild,
  AfterContentInit
} from "@angular/core";
import { NestingChildComponent } from "../nesting-child/nesting-child.component";

@Component({
  selector: "nesting-parent",
  templateUrl: "./nesting-parent.component.html",
  styleUrls: ["./nesting-parent.component.less"]
})
export class NestingParentComponent implements OnInit, AfterContentInit {
  @ContentChild(NestingChildComponent) private child: NestingChildComponent;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    console.log(this.child);
  }

  onChildGrowup() {
    this.child.growup();
  }
}
