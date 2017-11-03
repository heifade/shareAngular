import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nesting-child',
  templateUrl: './nesting-child.component.html',
  styleUrls: ['./nesting-child.component.less'],
  encapsulation: ViewEncapsulation.Native,
})
export class NestingChildComponent implements OnInit {

  public scale: number = 1;

  constructor() { }

  ngOnInit() {
  }

  get scaleStr() {
    return `scale(${this.scale})`;
  }

  growup() {
    this.scale ++;
  }

}
