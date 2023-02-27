import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };

  @Input() name: string;

  @ViewChild('heading',{static:true}) header : ElementRef;

  @ContentChild('contentParagraph',{static:true}) paragraph : ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit Called!');
    console.log('Text content :',this.header.nativeElement.value);
    console.log('Text Content of paragraph : ',this.paragraph.nativeElement.value);
    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(
      'Text Content of paragraph : ',
      this.paragraph.nativeElement.value
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Text content :', this.header.nativeElement.value);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
 

  ngOnDestroy(): void {
      console.log('ngDestroy called');
      
  }
}
