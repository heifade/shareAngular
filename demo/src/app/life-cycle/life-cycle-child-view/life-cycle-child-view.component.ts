import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";

@Component({
  selector: "life-cycle-child-view",
  templateUrl: "./life-cycle-child-view.component.html",
  styleUrls: ["./life-cycle-child-view.component.css"]
})
export class LifeCycleChildViewComponent
  implements OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked {
  @Input() index: number;
  @Input() value1: string;
  @Input() value2: string;

  constructor() {
    console.log(`child constructor ${this.index}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`child ngOnChanges ${JSON.stringify(changes)}`);
  }

  ngOnInit() {
    console.log(`child ngOnInit index:${this.index}`);
  }

  ngDoCheck(): void {
    console.log(`child ngDoCheck index:${this.index}`);
  }
  ngAfterViewInit(): void {
    console.log(`child ngAfterViewInit index:${this.index}`);
  }
  ngAfterViewChecked(): void {
    console.log(`child ngAfterViewChecked index:${this.index}`);
  }

  ngOnDestroy() {
    console.log(`child ngOnDestroy index:${this.index}`);
  }
}
