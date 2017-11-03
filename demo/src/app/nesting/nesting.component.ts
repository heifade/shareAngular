import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../common/animation/fade-in';

@Component({
  selector: 'app-nesting',
  templateUrl: './nesting.component.html',
  styleUrls: ['./nesting.component.css'],
  animations: [fadeIn]
})
export class NestingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
