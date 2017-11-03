import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.less']
})
export class ErrorComponent implements OnInit {

  @Input() show: boolean;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
