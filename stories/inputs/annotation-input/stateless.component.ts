import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'expl-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})

export class StatelessAnnotationComponent {
  @Input()
  title;

  @Input('OtherTitle')
  title2;
}
