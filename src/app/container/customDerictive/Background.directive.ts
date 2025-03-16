import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector :'[SetBackGound]'
})
// export class SetBackGound implements OnInit{
//     // private ele;
//     constructor(private ele:ElementRef){
//         //  this.ele=ele;
//     }

//     ngOnInit(){
// this.ele.nativeElement.style.backgroundColor='orange'
//    this.ele.nativeElement.style.color='black'
//     }
// }


export class SetBackGound implements OnInit{
    // private ele;
    // private renderer
    constructor(private ele:ElementRef,private renderer:Renderer2){
        //  this.ele=ele;
        // this.renderer=renderer;
    }

    ngOnInit(){
// this.ele.nativeElement.style.backgroundColor='orange'
//    this.ele.nativeElement.style.color='black'

     this.renderer.setStyle(this.ele.nativeElement,'backgroundColor','orange');
     this.renderer.setStyle(this.ele.nativeElement,'color','black')
    }
}