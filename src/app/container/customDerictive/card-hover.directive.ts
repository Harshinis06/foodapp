import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private ele:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') 
  mouseHoverBrite(){
    this.renderer.addClass(this.ele.nativeElement,'cardHightlighter')
    this.renderer.setStyle(this.ele.nativeElement,'backgroundColor','grey')
  }
  @HostListener('mouseleave')
  mouseHoverBriteLess(){
    this.renderer.addClass(this.ele.nativeElement,'cardHightlighter')
    this.renderer.setStyle(this.ele.nativeElement,'backgroundColor','white')
}
}

