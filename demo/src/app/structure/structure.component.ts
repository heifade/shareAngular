import { Component, OnInit } from "@angular/core";
import { fadeIn } from "../common/animation/fade-in";

@Component({
  selector: "app-structure",
  templateUrl: "./structure.component.html",
  styleUrls: ["./structure.component.css"],
  animations: [fadeIn]
})
export class StructureComponent implements OnInit {
  public check1: boolean = false;
  public check2: boolean = false;

  constructor() {}

  ngOnInit() {}
}
