import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[highLight]"
})
export class HighLightDirective {
  @Input("highLight") highLightColor: string;

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter")
  onMouseEnter() {
    this.highlight(this.highLightColor || 'red');
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
