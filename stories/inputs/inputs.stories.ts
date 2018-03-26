import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs/angular';

import { FatherDefaultComponent } from './default-input/father-default.component';

storiesOf('Inputs', module)
    .addDecorator(withKnobs)
    .add('Default', () => ({
        component: FatherDefaultComponent,
        props: text('Name input', 'test')
    }));