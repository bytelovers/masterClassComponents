import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'expl-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentAnnotationComponent {
  receivedMessage;

  showMessage(event): void {
    this.receivedMessage = event.msg;
    this.sendToLogger(event);
  }

  // Declared ONLY for send event to storybook
  sendToLogger(event): void {}
}
