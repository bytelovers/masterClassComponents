import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'expl-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildAnnotationComponent {
  @Input()
  messageText;

  @Output()
  sendMessage = new EventEmitter();

  sendMessageText(event) {
    this.sendMessage.emit({ msg: this.messageText });
  }
}
