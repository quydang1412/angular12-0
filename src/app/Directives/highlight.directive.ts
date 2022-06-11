import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight:string = '';

  constructor(private el: ElementRef) { 
    
    this.el.nativeElement.style.color = 'blue';
  }

  ngOnInit(): void{
    console.log(this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;
    // console.log(this.appHighlight);
  }

}
