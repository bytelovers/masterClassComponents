import { NgModule } from '@angular/core';

import { StatefulAnnotationComponent } from './annotation-input/stateful.component';
import { StatelessAnnotationComponent } from './annotation-input/stateless.component';

@NgModule({
  imports: [],
  exports: [
    StatefulAnnotationComponent,
    StatelessAnnotationComponent
  ],
  declarations: [
    StatefulAnnotationComponent,
    StatelessAnnotationComponent
  ],
  providers: [],
})
export class DefaultInputModule { }
