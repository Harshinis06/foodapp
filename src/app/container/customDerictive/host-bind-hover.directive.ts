import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostBindHover]'
})
export class HostBindHoverDirective {

  constructor(private ele:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') background='#ccff99'
   @HostBinding('style.width') width='40px'

  @HostBinding('style.color') color='#993300'

  @HostBinding('style.font-weight') styles='bold'
}
