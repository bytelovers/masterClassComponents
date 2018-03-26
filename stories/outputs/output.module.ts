import { NgModule } from '@angular/core';

import { ParentAnnotationComponent } from './annotation-output/parent.component';
import { ChildAnnotationComponent } from './annotation-output/child.component';

@NgModule({
  imports: [],
  exports: [
    ParentAnnotationComponent,
    ChildAnnotationComponent
  ],
  declarations: [
    ParentAnnotationComponent,
    ChildAnnotationComponent
  ],
  providers: [],
})
export class DefaultOutputModule { }
