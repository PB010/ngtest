import {Directive, ElementRef, Inject, Input, OnInit} from "@angular/core";
import {JQ_TOKEN} from "../jQuery.service";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Directive({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
  @Input('modal-trigger') modalId: string;
  private htmlElement: HTMLElement;

  constructor(@Inject(JQ_TOKEN) private $: any,
              elementRef:  ElementRef) {
    this.htmlElement = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.htmlElement.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({})
    });
  }

}
