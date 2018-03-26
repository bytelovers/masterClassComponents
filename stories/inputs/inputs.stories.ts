import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs/angular';

import { DefaultInputModule } from "./input.module";

import { StatefulComponent } from './default-input/stateful.component';

storiesOf('Inputs', module)
    .addDecorator(
        moduleMetadata({
            imports: [DefaultInputModule]
        })
    )
    .addDecorator(withKnobs)
    .add('Default', () => ({
        component: StatefulComponent,
        props: {
            title: text('title', 'test title')
        }
    }));
