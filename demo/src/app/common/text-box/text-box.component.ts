import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "[text-box]",
  templateUrl: "./text-box.component.html",
  styleUrls: ["./text-box.component.css"]
})
export class TextBoxComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onInput(value:string) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
