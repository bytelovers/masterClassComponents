import { storiesOf, moduleMetadata } from '@storybook/angular';

import { FatherDefaultComponent } from './default-encapsulation/father-default.component';
import { FatherNativeDefaultComponent } from './native-default/father-native-default.component';
import { FatherNoneDefaultComponent } from './default-none/father-none-default.component';
import { FatherNativeNoneComponent } from './native-none/father-native-none.component';
import { DefaultEncapsulationModule } from './encapsulation.module';

storiesOf('Encapsulation', module)
    .addDecorator(
        moduleMetadata({
            imports: [DefaultEncapsulationModule]
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