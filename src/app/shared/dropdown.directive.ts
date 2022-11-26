import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggle(e: Event) {
    this.isOpen = this.element.nativeElement.contains(e.target)
      ? !this.isOpen
      : false;
  }

  constructor(private element: ElementRef) {}
}
