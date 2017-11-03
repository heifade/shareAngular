import { Component, OnInit, Input, HostListener } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "btn",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.less"],
  animations: [
    trigger("mouseStatus", [
      state(
        "mouseover",
        style({
          backgroundColor: "#286090",
          transform: "scale(1.05)"
        })
      ),
      state(
        "mouseout",
        style({
          backgroundColor: "#337ab7",
          transform: "scale(1)"
        })
      ),
      state(
        "mousedown",
        style({
          backgroundColor: "#204d74",
          transform: "scale(0.95)"
        })
      ),
      transition("* => mouseout", animate("80ms ease-in")),
      transition("* => mouseover", animate("50ms ease-in")),
    ])
  ]
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Input() type: string = "button";
  public mouseStatus: string = "default";

  constructor() {}

  @HostListener("mouseenter")
  onMouseEnter() {
    this.mouseStatus = "mouseover";
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.mouseStatus = "mouseout";
  }

  @HostListener("mousedown")
  onMouseDown() {
    this.mouseStatus = "mousedown";
  }
  @HostListener("mouseup")
  onMouseUp() {
    this.mouseStatus = "mouseover";
  }

  ngOnInit() {



  }
}
