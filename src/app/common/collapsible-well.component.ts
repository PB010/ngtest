import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html'
})

export class CollapsibleWellComponent {
  private visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
