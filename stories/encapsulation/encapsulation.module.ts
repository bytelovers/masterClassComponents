import { NgModule } from '@angular/core';

import { SonDefaultComponent } from './default-encapsulation/son-default.component';
import { SonNativeDefaultComponent } from './native-default/son-native-default.component';
import { SonNoneDefaultComponent } from './default-none/son-none-default.component';
import { SonNativeNoneComponent } from './native-none/son-native-none.component';

@NgModule({
  imports: [],
  exports: [
    SonDefaultComponent,
    SonNativeDefaultComponent,
    SonNoneDefaultComponent,
    SonNativeNoneComponent
  ],
  declarations: [
    SonDefaultComponent,
    SonNativeDefaultComponent,
    SonNoneDefaultComponent,
    SonNativeNoneComponent
  ],
  providers: [],
})
export class DefaultEncapsulationModule { }
