import { Directive ,Input, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appStars]'
})
export class StarsDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 0

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    this.eleRef.nativeElement.style.left = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }
}
