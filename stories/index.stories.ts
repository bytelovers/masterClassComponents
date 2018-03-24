import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/angular/demo';
import { FatherDefaultComponent } from './encapsulation/default-encapsulation/father-default.component';
import { FatherNativeDefaultComponent } from './encapsulation/native-default/father-native-default.component';
import { FatherNoneDefaultComponent } from './encapsulation/default-none/father-none-default.component';
import { FatherNativeNoneComponent } from './encapsulation/native-none/father-native-none.component';
import { DefaultEncapsulationModule } from './encapsulation/encapsulation.module';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Encapsulation', module)
  .addDecorator(
    moduleMetadata({
      imports: [ DefaultEncapsulationModule ]
    })
  )
  .add('Default Encapsulation', () => ({
    component: FatherDefaultComponent,
    props: {},
  }))
  .add('Native encapsulation inside default encapsulation', () => ({
    component: FatherNativeDefaultComponent,
    props: {}
  }))
  .add('None encapsulation insde default encapsulation', () => ({
    component: FatherNoneDefaultComponent,
    props: {}
  }))
  .add('None encapsulation inside Native encapsulation', () => ({
    component: FatherNativeNoneComponent,
    props: {}
  }));
